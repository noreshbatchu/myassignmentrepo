// Load the http module to create an http server.
const http = require('http');

// Configure our HTTP server to respond with "Hello World" to all requests.
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

// Listen on port 80, IP defaults to 0.0.0.0
server.listen(80);

console.log('Server running at http://0.0.0.0:80/');
