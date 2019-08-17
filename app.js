const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/tasks', require('./api/routes/tasks'));

module.exports = app;