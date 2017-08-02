const fs = require('fs');
const path = process.argv[2];
const buf = fs.readFileSync(path);
const str = buf.toString();
const newlines = str.split('\n').length - 1;
console.log(newlines);