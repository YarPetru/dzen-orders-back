const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productsRouter = require('./routes/api/products');
const ordersRouter = require('./routes/api/orders');
const socketIO = require('socket.io');

const app = express();
app.use(cors());

const server = require('http').Server(app);
const io = socketIO(server);

app.use(express.json());
app.use(express.static('public'));

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

app.use((__, response) => {
  response.status(404).json({
    message: 'Not found',
  });
});

app.use((error, __, response, _) => {
  const { status = 500, message = 'Server error' } = error;
  response.status(status).json({ message });
});

app.set('socketio', io);

module.exports = app;
