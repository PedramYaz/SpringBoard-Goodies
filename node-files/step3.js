const fs = require("fs");
const process = require("process");
const axios = require("axios");

function handleOutput(text, out) {
  if (out) {
    fs.writeFile(out, text, "utf8", function (err) {
      if (err) {
        console.error(`couldn't write ${out}`);
        process.exit(1);
      } else {
        console.log(text);
      }
    });
  }
}

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log(`Error, reading ${path}: ${err}`);
      process.exit(1);
    } else {
      handleOutput(data, out);
    }
  });
}

async function webCat(URL) {
  try {
    let results = await axios.get(URL);
    handleOutput(results.data, out);
  } catch (err) {
    console.error(`Error fetching ${URL}`);
    process.exit(1);
  }
}

let path;
let out;

if (process.argv[2] === "--out") {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}

if (path.slice(0, 4) === "http") {
  webCat(path, out);
} else {
  cat(path, out);
}
