const mongoose = require('mongoose');
const socketIO = require('socket.io');
const app = require('./app');

mongoose.set('strictQuery', true);

const { DB_HOST, PORT = 9999 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('DB connect success');

    const server = app.listen(PORT, () =>
      console.log(`Server is running... . Use API on port ${PORT}`)
    );
    const io = socketIO(server);
    let activeSessions = 0;

    io.on('connection', socket => {
      activeSessions += 1;
      io.emit('activeSessionCount', activeSessions);
      socket.on('disconnect', () => {
        activeSessions--;
        io.emit('activeSessionCount', activeSessions);
      });
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
