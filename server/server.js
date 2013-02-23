try {

  var express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);

  server.listen(3001);

  io.sockets.on('connection', function (socket) {
    
    io.sockets.volatile.emit('message', { message: "Hello world 2 !!!"});
    io.sockets.emit('message', { message: "Hello world 3 !!!"});
    socket.broadcast.emit({ message: "Hello world 1 !!!"});
    
  });

  // Handle ajax requests and server up and running page ...
  app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
  });

  console.log('Node server started on http://localhost:3001');
  console.log('Press Ctrl+C to stop');

} catch (e) {

  console.log(e);

}