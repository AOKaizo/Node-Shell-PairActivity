const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}


process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  let cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd.split(" ")[0] === "cat") {
    cat(cmd);
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
