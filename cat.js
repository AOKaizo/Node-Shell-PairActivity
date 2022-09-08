const fs = require("fs");
const { stdout } = require("process");
const { readFile } = require("fs");
const done = (output) => {
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
  }

module.exports = function (catInput) {
  let catArr = catInput.split(" ");
  let cat = catArr[0];
  let input = catArr[1].includes('.js') ? "./" + catArr[1] : "./" + catArr[1] + ".js"
  if (cat === "cat") {
    readFile(input, "utf8", (err, data) => {
      if (err) done(err);
      done(data);
    });
  }
};
