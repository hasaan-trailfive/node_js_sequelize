// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

// module.exports = sequelize;

const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('node_js_backend', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
