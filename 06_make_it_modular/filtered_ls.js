const fs = require('fs');
const path = require('path');

module.exports = (folder, extension, callback) => {
  fs.readdir(folder, (err, list) => {
    if (err)
      return callback(err);
    extension = '.' + extension;
    const filteredList = list.filter((file) => (path.extname(file) === extension));
    callback(null, filteredList);
  });  
};