const express = require('express');
const app = express();
const port = 3000;

// Homepage
app.get('/', (req, res) => {
  res.send('<h1>Hello from Node.js App!</h1><p>Deployed on CentOS 9 🎉</p>');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'UP', timestamp: new Date() });
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ App running at http://0.0.0.0:${port}`);
});
