'use strict';

var mongoose = require('mongoose');
var app = require('./app');

require('dotenv').config({ path: 'variables.env' })

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';
const DB = process.env.DB || 'mongodb://nodetaskapi:rodneymullen1@ds157641.mlab.com:57641/heroku_2sqrv2d6';

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("DB connected", DB)
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  })



