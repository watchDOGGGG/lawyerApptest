const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 2080 });


wss.on('connection', (ws) => {
  console.log('User connected', wss.clients.size);

  ws.on('message', (message) => {
    const messageString = message.toString('utf-8');
    console.log('Received message:', messageString);

    // Broadcast the received message to all connected clients except the sender
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('User disconnected');
  });
});