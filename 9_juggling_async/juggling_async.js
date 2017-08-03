const http = require('http');

const urls = process.argv.slice(2);

let count = 0;
const results = [];

function addDataToList(url, idx) {
  http.get(url, (res) => {
    res.setEncoding('utf8');
    let allData = '';
    
    res.on('data', (data) => {
      allData = allData.concat(data);
    })
    
    res.on('end', () => {
      count += 1;
      results[idx] = allData;
      if (count === 3) {
        printResults(results);
      }
    })
  });
}

function printResults(list) {
  list.forEach((item) => {
    console.log(item);
  });
}

urls.forEach(addDataToList);