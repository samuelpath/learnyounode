const http = require('http');

const url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8');
  let allData = '';
  res.on('data', (data) => {
    allData = allData.concat(data);
  })
  res.on('end', () => {
    console.log(allData.length);
    console.log(allData);
  });
});