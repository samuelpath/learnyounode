const filterFn = require('./filtered_ls');
const folder = process.argv[2];
const extension = process.argv[3];

const printList = (err, list) => {
  if (err)
    return console.error(err);
  list.forEach((file) => { console.log(file); });
};

filterFn(folder, extension, printList);