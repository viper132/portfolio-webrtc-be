import socketLeaving from './leaving.js';

const socketCalling =
  (socket) =>
  ({ roomName, peerId }) => {
    socket.join(roomName);
    socket.to(roomName).emit('joined', peerId);

    socket.on('disconnect', socketLeaving({ socket, roomName, peerId }));
  };

export default socketCalling;
