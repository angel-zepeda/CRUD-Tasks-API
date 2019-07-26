'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var taksRoutes = require('./routes/task');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', taksRoutes);


module.exports = app;
