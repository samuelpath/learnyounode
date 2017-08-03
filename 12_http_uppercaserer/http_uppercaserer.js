const http = require('http');
const map = require('through2-map');

const portNumber = process.argv[2];

const toUpper = (chunk) => chunk.toString().toUpperCase();

const convertToUpperCase = (req, res) => {
  if (req.method !== 'POST')
    return res.end('Send me a POST !\n');
  req.pipe(map(toUpper)).pipe(res);
};

const server = http.createServer(convertToUpperCase);
server.listen(portNumber);