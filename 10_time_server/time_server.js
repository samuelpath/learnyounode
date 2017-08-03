const net = require('net');
const portNumber = process.argv[2];

const zeroFill = (i) => (i < 10 ? '0' : '') + i;

function getCurrentDateAndTimeAsString() {
  const d = new Date();
  return `${d.getFullYear()}-${zeroFill(d.getMonth() + 1)}-${zeroFill(d.getDate())} ${zeroFill(d.getHours())}:${zeroFill(d.getMinutes())}`;
}

function listener(socket) {
  socket.end(getCurrentDateAndTimeAsString() + '\n');
}

const server = net.createServer(listener);

server.listen(portNumber);