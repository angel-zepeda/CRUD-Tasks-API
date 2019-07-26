'use strict';

var mongoose = require('mongoose');
var app = require('./app');
const PORT = 5000;
const DB = 'mongodb://127.0.0.1/todoreact';

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(DB, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  })



