try {

  var express = require('express')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);

  server.listen(3001);

  var pjson = require('../package.json');

  io.set('log level', 1);

  io.configure(function (){
    io.set('authorization', function (handshakeData, callback) {
      // console.log(handshakeData);
      callback(null, true); // True of false auth success ...
    });
  });

  io.sockets.on('connection', function (socket) {  
    // Emit and forget ...
    socket.volatile.emit('message', { message: "Hello world !!!"});
    // Listen to server message sent from client ...
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