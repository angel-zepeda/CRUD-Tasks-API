'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')

var taksRoutes = require('./routes/task');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', [taksRoutes]);


module.exports = app;
