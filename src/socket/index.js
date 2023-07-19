import socketCalling from './calling.js';

const socketConnection = (socket) => {
  console.log('new client connected');

  socket.on('calling', socketCalling(socket));
};

export default socketConnection;
