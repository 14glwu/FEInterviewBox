// worker.js
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plan'
  });
  res.end('I am worker, pid: ' + process.pid + ', ppid: ' + process.ppid);
  throw new Error('worker process exception!'); // 测试异常进程退出、重启
});

let worker;
process.title = 'node-worker';
process.on('message', function(message, sendHandle) {
  if (message === 'server') {
    worker = sendHandle;
    worker.on('connection', function(socket) {
      //socket.server = null; // 如果报TypeError: ParserIncomingMessage is not a constructor，就加上这句。当然也可以升级node版本来解决这个问题
      server.emit('connection', socket);
    });
  }
});

process.on('uncaughtException', function(err) {
  console.log(err);
  process.send({ act: 'suicide' });
  worker.close(function() {
    process.exit(1);
  });
});
