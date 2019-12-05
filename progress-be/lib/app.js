const express = require('express');
const app = express();

// eslint-disable-next-line new-cap
const server = require('http').Server(app);
const io = require('socket.io')(server);
const progressSocket = require('./socket/progress');

app.use(express.json());

// app.use('/api/v1/RESOURCE', require('./routes/resource'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

io.on('connection', socket => {
  progressSocket(socket);
});

module.exports = server;
