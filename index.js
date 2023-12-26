const express = require('express');
const mongoose = require('mongoose');
const { securityMiddleware } = require('./middlewares');
const { productRoutes } = require('./controllers');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());
app.use(securityMiddleware);

// Routes
const router = express.Router();
productRoutes(router);

// Set up routes under '/api'
app.use('/api', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
