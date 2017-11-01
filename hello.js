#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World3\n');
}).listen(9080, 'localhost');
console.log('Server running at http://localhost:9080/');
