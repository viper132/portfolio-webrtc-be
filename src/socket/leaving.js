const socketLeaving =
  ({ socket, roomName, peerId }) =>
  () => {
    socket.leave(roomName);
    socket.to(roomName).emit('leaved', peerId);
  };

export default socketLeaving;
