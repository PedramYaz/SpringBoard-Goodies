"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

/** Related functions for jobs */

class Job {
  /** Create a job (from data), update db, return new job data.
   *
   * Data should be { title, salary, equity, company_handle }
   *
   * Returns { title, salary, equity, company_handle }
   *
   * Throws BadRequestError if company_handle doesn't exist.
   */

  static async create(data) {
    const result = await db.query(
      `INSERT INTO jobs
                (title, salary, equity, company_handle)
                VALUES ($1, $2, $3, $4)
                RETURNING id, title, salary, equity, company_handle AS "companyHandle"`,
      [data.title, data.salary, data.equity, data.company_handle]
    );
    return result.rows[0];
  }

  /** Find all jobs (with optional search filters)
   *
   * Filters:
   * - minSalary
   * - hasEquity
   * - title
   *
   * Returns [{ id, title, salary, equity, companyHandle, companyName}, ... ]
   *
   */

  static async findAll({ minSalary, hasEquity, title } = {}) {
    let query = `SELECT j.id,
                        j.title,
                        j.salary,
                        j.equity,
                        j.company_handle AS "companyHandle",
                        c.name AS "companyName"
                    FROM jobs j 
                        LEFT JOIN companies AS c ON c.handle = j.company_handle`;
    let whereExpressions = [];
    let queryValues = [];

    if (minSalary !== undefined) {
      queryValues.push(minSalary);
      whereExpressions.push(`salary >= $${queryValues.length}`);
    }

    if (hasEquity !== undefined) {
      queryValues.push(hasEquity);
      whereExpressions.push(`equity > 0`);
    }

    if (title !== undefined) {
      queryValues.push(`%${title}%`);
      whereExpressions.push(`title LIKE $${queryValues.length}`);
    }

    if (whereExpressions.length > 0) {
      query += " WHERE " + whereExpressions.join(" AND ");
    }

    query += " ORDER BY title";
    const jobResults = await db.query(query, queryValues);
    return jobResults.rows;
  }

  /** Given a job id, return data about that companies job oppurtunities
   *
   * Returns { id, title, salary, equity, company_handle, company }
   *  WHERE company is { handle, name, description, numEmployees, logoURL}
   *
   * Error will eb thrown if it is not found
   */

  static async get(id) {
    const result = await db.query(
      `SELECT id,, title, salary, equity, company_handle AS "companyHandle"
            FROM jobs 
            WHERE id = $1`,
      [id]
    );
    const jobs = result.rows[0];

    if (!jobs) throw new NotFoundError(`No job id: ${id}`);

    const companiesResult = await db.query(
      `SELECT handle, name, description, num_employees AS "numEmployees, logo_url AS "logoUrl"
            FROM companies
            WHERE handle = $1`,
      [jobs.companyHandle]
    );
    delete jobs.companyHandle;
    jobs.company = companiesResult.rows[0];

    return jobs;
  }

  /** update job data with 'data'
   *
   * "partial update" that changes the data of the provided information and not the rest, as all the fiels are not necessary to input
   *
   * the data can include { title, salary, equity }
   *
   * returns { id, title, salary, equity, companyHandle }
   *
   * throws a NotFoundError if not found.
   *
   */

  static async update(id, data) {
    const { setCols, values } = sqlForPartialUpdate(data, {});
    const idVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE jobs 
                        SET ${setCols}
                        WHERE id = ${idVarIdx}
                        RETURNING id, title, salary, equity, company_handle AS "companyHandle"`;
    const result = await db.query(querySql, [...values, id]);
    const job = result.rows[0];

    if (!job) throw new NotFoundError(`No job with the id: ${id}`);

    return job;
  }

  /** Deleting given job id from db
   *
   * Throw an error if company not found
   */

  static async remove(id) {
    const result = await db.query(
      `DELETE 
          FROM jobs
          WHERE id = $1
          RETURNING id`,
      [id]
    );

    const job = result.rows[0];

    if (!job) throw new NotFoundError(`No job with id of ${id}`);
  }
}

module.exports = Job;
