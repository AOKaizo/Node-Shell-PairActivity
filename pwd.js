const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

module.exports = function () {
  done(process.cwd());
};
