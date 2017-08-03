const http = require('http');
const url = require('url');

const portNumber = process.argv[2];

const parseDate = (date) => {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

const unixTime = (date) => {
  return {
    unixtime: date.getTime()
  }
}

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url);
  const date = new Date(query.split('=')[1]);
  let result;

  if (pathname === '/api/parsetime') {
    result = parseDate(date);
  }

  if (pathname === '/api/unixtime') {
    result = unixTime(date);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(portNumber);