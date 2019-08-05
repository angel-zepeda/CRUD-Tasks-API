'use strict';

var express = require('express');
var tasksController = require('../controllers/tasks');
var route = express.Router();

route.get('/tasks', tasksController.index);
route.post('/task', tasksController.create);
route.delete('/task/delete/:id', tasksController.deleteTask);
route.get('/task/:id', tasksController.show);
route.put('/task/update/:id', tasksController.update);

module.exports = route;
