const http = require('http');
const fs = require('fs');

// Define the request handler function
const requestHandler = (request, response) => {
  // Read the message from a file asynchronously
  fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end('Internal Server Error');
    } else {
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end(data);
    }
  });
};

// Create the server
const server = http.createServer(requestHandler);

// Start listening on port 3021
server.listen(3021, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log('Server is listening on port 3021');
  }
});