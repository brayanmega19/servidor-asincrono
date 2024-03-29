const http = require('http');
const fs = require('fs');

// Se crea la arrow function requestHandler
const requestHandler = (request, response) => {

  // Simulate an asynchronous operation with setTimeout
  setTimeout(() => {
    // Read a message from a file asynchronously to demonstrate server operation
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Internal Server Error');
      } else {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(data);
      }
    });
  }, 2000); // Aqui hay un retraso de dos segundos
};

// Se crea el servidor
const server = http.createServer(requestHandler);

//Se utiliza el puerto 3021
server.listen(3021, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log('Server is listening on port 3021');
  }
});