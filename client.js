const WebSocket = require('ws');
const socket = new WebSocket('ws://192.168.247.171:2080');

socket.addEventListener('open', () => {
  console.log('Connected to the WebSocket server');

  setTimeout(() => {
    // Send a message to the server after 3 seconds
    socket.send('Test message from the client');
  }, 3000);
});

socket.addEventListener('message', (event) => {
  const message = event.data;
  console.log('Received message:', message);
});

socket.addEventListener('close', () => {
  console.log('Disconnected from the WebSocket server');
});