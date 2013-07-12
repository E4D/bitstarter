var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// read index.html into a buffer this should be done async in the spirit of node but...
var fileBuffer=new Buffer(fs.readFileSync('index.html'));

// request for the root return the index page
app.get('/', function(request, response) {
  response.send(fileBuffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
