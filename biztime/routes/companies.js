const express = require("express");
const slugify = require("slugify");
const ExpressError = require("../expressError");
const db = require("../db");

const router = new express.Router();

router.get("", async function (res, res, next) {
  try {
    const results = await db.query(
      `SELECT code, name FROM companies ORDER BY name`
    );
    return res.json({ companies: results.rows });
  } catch (err) {
    return next(err);
  }
});

router.get("/industry/:code", async function (req, res, next) {
  try {
    const result = await db.query(
      `SELECT c.code, c.name, c.description, i.industry
        FROM companies AS c
          LEFT JOIN company_industry AS ci
            ON c.code = ci.company_code
          LEFT JOIN industries AS i ON ci.industry_code = i.code
        WHERE c.code = $1`,
      [req.params.code]
    );

    let { code, name, description } = result.rows[0];
    let industries = result.rows.map((r) => r.industry);

    return res.json({ code, name, description, industries });
  } catch (err) {
    return next(err);
  }
});

router.get("/:code", async function (req, res, next) {
  try {
    let code = req.params.code;
    const results = await db.query(
      `SELECT code, name, description FROM companies WHERE code=$1`,
      [code]
    );
    const invResults = await db.query(
      `SELECT id FROM invoices WHERE comp_code = $1`,
      [code]
    );
    if (results.rows.length === 0) {
      throw new ExpressError(`No such company: ${code}`, 404);
    }
    const company = results.rows[0];
    const invoices = invResults.rows;
    company.invoices = invoices.map((inv) => inv.id);

    return res.json({ company: company });
  } catch (err) {
    return next(err);
  }
});

router.post("", async function (req, res, next) {
  try {
    let { name, description } = req.body;
    let code = slugify(name, { lower: true });

    const results = await db.query(
      `INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING code, name, description`,
      [code, name, description]
    );
    return res.status(201).json({ company: results.rows[0] });
  } catch (err) {
    return next(err);
  }
});

router.put("/:code", async function (req, res, next) {
  try {
    let { name, description } = req.body;
    let code = req.params.code;

    const results = await db.query(
      `UPDATE companies SET name = $1, description = $2 WHERE code = $3 RETURNING code, name, description`,
      [name, description, code]
    );

    if (results.rows.length === 0) {
      throw new ExpressError(`No such company: ${code}`, 404);
    } else {
      return res.json({ company: results.rows[0] });
    }
  } catch (err) {
    return next(err);
  }
});

router.delete("/:code", async function (req, res, next) {
  try {
    let code = req.params.code;
    const result = await db.query(
      `DELETE FROM companies WHERE code = $1 RETURNING code`,
      [code]
    );

    if (results.rows.length == 0) {
      throw new ExpressError(`No such company: ${code}`, 404);
    } else {
      return res.json({ status: "deleted" });
    }
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
