const http = require('http');
const Server = require('socket.io');
const app = require('./app');
const { Message } = require('./models');

const httpServer = http.createServer(app);

const io = new Server(httpServer);

const CHAT_EVENT = {
  NEW_MESSAGE_EVENT: 'NEW_MESSAGE_EVENT',
  NEW_MESSAGE_ERROR_EVENT: 'NEW_MESSAGE_ERROR_EVENT',
};

io.on('connect', socket => {
  socket.on(CHAT_EVENT.NEW_MESSAGE_EVENT, async body => {
    try {
      const data = JSON.parse(body);
      const newMessageInstance = await Message.create(data);
      io.emit(CHAT_EVENT.NEW_MESSAGE_EVENT, JSON.stringify(newMessageInstance));
    } catch (err) {
      socket.emit(CHAT_EVENT.NEW_MESSAGE_ERROR_EVENT, JSON.stringify(err));
    }
  });
});

const port = process.env.PORT ?? 5000;

httpServer.listen(port);
