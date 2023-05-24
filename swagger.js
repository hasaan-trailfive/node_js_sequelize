// const express = require('express');
// const swaggerUi = require('swagger-ui-express');
// const swaggerJsdoc = require('swagger-jsdoc');

// const options = {
//   swaggerDefinition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'API Documentation',
//       version: '1.0.0',
//     },
//   },
//   apis: ['./routes/*.js'], // Path to your API route files
// };

// const specs = swaggerJsdoc(options);

// module.exports = (app) => {
//   app.use('/', swaggerUi.serve, swaggerUi.setup(specs));
// };


const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node JS Backend Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Update the path according to your routes directory
};

const specs = swaggerJsdoc(options);

module.exports = specs;