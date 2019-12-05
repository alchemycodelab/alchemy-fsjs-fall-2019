const Progress = require('../model/Progress');

module.exports = socket => {
  console.log('Connection happened!!');

  socket.on('CREATE_PROGRESS', ({ name }) => {
    Progress
      .create({ name })
      .then(progress => {
        socket.broadcast.emit('CREATE_PROGRESS', progress);
      });
  });

  socket.on('UPDATE_PROGRESS', ({ id }) => {
    Progress
      .findByIdAndUpdate(id, { $inc: { progress: 1 } }, { new: true })
      .then(progress => {
        socket.broadcast.emit('UPDATE_PROGRESS', progress);
      });
  });

  socket.on('PROGRESS', () => {
    console.log('progress');
    socket.emit('PROGRESS_SEEN');
  });
};
