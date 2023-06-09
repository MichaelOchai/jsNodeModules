//Description: The HTTP module provides functionality for creating HTTP servers and making HTTP requests.
//Usage: The HTTP module can be used to build web servers, handle incoming HTTP requests, and make outgoing HTTP requests.
//Example: Creating an HTTP server that listens on port 3000:

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
