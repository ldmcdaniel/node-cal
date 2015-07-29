var http = require('http');
var cp = require('child_process');

// module.exports =

function mod() {
  http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');

  }).listen(1501);
  console.log("Point your browser to 'http://localhost:1500'");
};

mod();



