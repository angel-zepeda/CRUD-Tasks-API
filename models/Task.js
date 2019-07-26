'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    // unique: true,
    min: 6
  }
})

module.exports = mongoose.model('Task', TaskSchema);