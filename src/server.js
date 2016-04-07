//exports a function that creates a Socket.io server
import Server from 'socket.io'
// create socket server as well as a normal http server on port 3000
export default function startServer(store) {
  const io = new Server().attach(3000);
//subscribe a listener to the store
store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );
//isten to 'connection' events on our Socket.io server
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}
