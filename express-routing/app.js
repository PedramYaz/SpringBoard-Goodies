const express = require("express");
const app = express();
const ExpressError = require("./expressError");

const {
  convertAndValidateNumsArray,
  findMode,
  findMean,
  findMedian,
} = require("./helpers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/mean", function (req, res, next) {
//   return res.send("Hello");
// });

app.get("/mean", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass in numbers in your query string",
      400
    );
  }
  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = { operation: "mean", results: findMean(nums) };
  return res.send(result);
});

app.get("/median", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass in numbers in your query string",
      400
    );
  }
  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = { opertation: "Median", results: findMedian(nums) };

  return res.send(result);
});

app.get("/mode", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      "You must pass in numbers in your query string",
      400
    );
  }
  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let results = { operation: "Mode", results: findMode(nums) };

  return res.send(results);
});

app.get("/all", function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError("Must pass numbers in the query string", 400);
  }
  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }
  let results = {
    operation: "All",
    mean: findMean(nums),
    median: findMedian(nums),
    mode: findMode(nums),
  };
  return res.send(results);
});

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
  });
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
