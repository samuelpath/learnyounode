const fs = require('fs');
const path = process.argv[2];
fs.readFile(path, 'utf8', (err, str) => {
  if (err) {
    return console.log(err.message);
  }
  const newlines = str.split('\n').length - 1;
  console.log(newlines);
});