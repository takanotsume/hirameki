try {

  var express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);

  server.listen(3001);

  var pjson = require('../package.json');

  io.set('log level', 1);

  io.sockets.on('connection', function (socket) {
    
    // socket.broadcast.emit({ message: "Hello world 1 !!!"});
    socket.volatile.emit('message', { message: "Hello world 2 !!!"});
    socket.emit('message', { message: "Hello world 3 !!!"});
    
    socket.on('server', function (data) {
      console.log(data.message);
    });

  });

  // Handle ajax requests and server up and running page ...
  app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });

  console.log('Node server version '+pjson.version+' started on http://localhost:3001');
  console.log('Press Ctrl+C to stop');

} catch (e) {

  // Log exception ...
  console.log(e);

}