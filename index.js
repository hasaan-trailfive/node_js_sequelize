const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo');
// const swaggerSetup = require('./swagger');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const sequelize = require('./config/database');

// Synchronize models with the database
sequelize.sync({ force: false }) // set "force" to true to drop and recreate tables on every application start
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((err) => {
    console.error('Unable to synchronize the database:', err);
  });

// Body parsing middleware
app.use(express.json());

// API routes
app.use('/api/todos', todoRoutes);

// Swagger documentation
// swaggerSetup(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
