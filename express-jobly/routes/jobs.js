"use strict";

/** routes for jobs */

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const { ensureLoggedIn, ensureAdmin } = require("../middleware/auth");
const Jobs = require("../models/job");
const Job = require("../models/job");

const jobNewSchema = require("../schemas/jobNew.json");
const jobSearchSchema = require("../schemas/jobSearch.json");
const jobUpdateSchema = require("../schemas/jobUpdate.json");

const router = new express.Router();

/** POST /{ jobs } => {jobs}
 *
 * job should be { title, salary, equity, company_handle }
 *
 *  Returns { title, salary, equity, company_handle }
 *
 * Authorization required: admin
 */

router.post("/", ensureAdmin, async function (req, res, next) {
  try {
    const validation = jsonschema.validate(req.body, jobNewSchema);
    if (!validation.valid) {
      const errors = validation.errors.map((e) => e.stack);
      throw new BadRequestError(errors);
    }
    const job = await Job.create(req.body);
    return res.status(201).json({ job });
  } catch (err) {
    return next(err);
  }
});

/** GET / =>
 * { jobs: [ { title, salary, equity, company_handle }, ... ]}
 *
 * Can filter on different filter criteria:
 *  - minSalary
 * - hasEquity
 * - title
 *
 * authorization: none
 */

router.get("/", async function (req, res, next) {
  const query = req.query;
  if (query.minSalary !== undefined) query.minSalary = +query.minSalary;
  if (query.hasEquity !== undefined) query.hasEquity = +query.hasEquity;
  try {
    const validator = jsonschema.validate(query, jobSearchSchema);
    if (!validator.valid) {
      const errors = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errors);
    }
    const jobs = await Job.findAll(query);
    return res.json({ jobs });
  } catch (err) {
    return next(err);
  }
});

/** GET /[id] => { jobs }
 *
 * Where jobs is { title, salary, equity, company_handle }
 *
 * Authorization required: none
 *
 */

router.get("/:id", async function (req, res, next) {
  try {
    const job = await Job.get(req.params.id);
    return res.json({ job });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /[jobId] { field1, field2, ... } => { job }
 *
 * The data can include { title, salary, equity }
 *
 * returns { id, title, salary, equity, comanyHandle }
 *
 * Authorization required: admin
 *
 */

router.patch("/:id", ensureAdmin, async function (req, res, next) {
  try {
    const validator = jsonschma.validate(req.body, jobUpdateSchema);
    if (!validator.valid) {
      const errors = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errors);
    }

    const job = await Job.update(req.params.id, req.body);
    return res.json({ job });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[handle] => { deleted: id }
 *
 * Authorization required: admin
 *
 */

router.delete("/:id", ensureAdmin, async function (req, res, next) {
  try {
    await Job.remove(req.params.id);
    return res.json({ deleted: +req.params.id });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
