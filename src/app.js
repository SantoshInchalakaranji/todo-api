const express = require('express');
const logger = require('./middleware/logger');
const authenticate = require('./middleware/auth');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

const apiKey = '1234567890';


app.use(logger);
app.use(authenticate(apiKey));
app.use(express.json());


app.use('/api/todos', todoRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



module.exports = app;