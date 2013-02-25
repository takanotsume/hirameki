// HTTP Express server for local dev requirements without using apache2
// As seen in https://github.com/jbuck/express-persona/tree/master/examples but adapted for express 3

var express = require('express')
  , app = express()
  , server = require('http').createServer(app);

// The bodyParser, cookieParser, and session middlewares
app.use(express.logger())
  .use(express.static(__dirname+'/www'))
  .use(express.bodyParser())
  .use(express.cookieParser())
  .use(express.session({
    secret: "factory"
  }));

// Index page routing ...
app.get('/', function (req, res) {
  res.sendfile(__dirname + 'www/index.html');
});

server.listen(3000, function() {
  console.log('HTTP server started on http://localhost:3000');
  console.log('Press Ctrl+C to stop');
});