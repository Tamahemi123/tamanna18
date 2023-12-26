const express = require('express');
const mongoose = require('mongoose');
const { securityMiddleware } = require('./middlewares');
const { productRoutes } = require('./controllers');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(securityMiddleware);

const router = express.Router();
productRoutes(router);

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
