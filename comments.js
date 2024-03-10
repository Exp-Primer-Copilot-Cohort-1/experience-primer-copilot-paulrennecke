// Create web sever
// 1. Create a web server that can respond to requests for /comments
// 2. When a request is made to /comments, read the comments.json file and respond with its contents.

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with comments
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  console.log("Request received");
  fs.readFile('comments.json', function(err, data) {
    response.end(data);
  });
});

// Listen on port 8000, IP defaults to