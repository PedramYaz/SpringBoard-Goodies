const express = require("express");
const ExpressError = require("../expressError");
const db = require("../db");

const router = new express.Router();

router.get("", async function (req, res, next) {
  try {
    const results = await db.query(
      `SELECT code, industry FROM industries ORDER BY code`
    );
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

router.post("", async function (req, res, next) {
  try {
    const { code, industry } = req.body;
    const results = await db.query(
      `INSERT INTO industries (code, industry) VALUES ($1, $2) RETURNING code, industry`,
      [code, industry]
    );
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
