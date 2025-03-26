const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from specific origins
const allowedOrigins = ['http://localhost:5174', 'http://localhost:5175'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies and authentication headers
}));

// Your existing server setup
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

server.listen(5002, () => {
  console.log('Server is running on port 5002');
});