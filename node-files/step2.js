const fs = require("fs");
const process = require("process");
const axios = require("axios");

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log(`Error, reading ${path}: ${err}`);
      process.exit(1);
    } else {
      console.log(`${data}`);
    }
  });
}

async function webCat(URL) {
  try {
    let results = axios.get(URL);
    console.log(results.data);
  } catch (err) {
    console.error(`Error fetching ${URL}`);
    process.exit(1);
  }
}

let path = process.argv[2];

if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}
