//exports a function that creates a Socket.io server
import Server from 'socket.io'
// create socket server as well as a normal http server on port 3000
export default function startServer() {
  const io = new Server().attach(3000)
}
