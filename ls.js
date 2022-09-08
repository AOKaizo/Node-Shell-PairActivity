const fs = require('fs')
const done = (output) => {
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
  }

module.exports = function(){
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
          done(err);
        } else {
          done(files.join('\n'));
        }
      });
}
