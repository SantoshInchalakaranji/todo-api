const express = require('express');
const logger = require('./middleware/logger');
const authenticate = require('./middleware/auth');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

const apiKey = '1234567890';

//middleware
app.use(logger);
app.use(authenticate(apiKey));
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;