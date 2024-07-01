const WebSocket = require('ws');

// Create a WebSocket server listening on port 8097
const server = new WebSocket.Server({ port: 8097 });

server.on('connection', (ws) => {
  console.log('New client connected');

  // Listen for messages from the client
  ws.on('message', (message) => {
    console.log('Received:', message);
    // Echo the message back to the client
    ws.send(`Echo: ${message}`);
  });

  // Listen for when the client disconnects
  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // Send a welcome message to the client
  ws.send('Welcome new client!');
});

console.log('WebSocket server is running on ws://localhost:8096');
