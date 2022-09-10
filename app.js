const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/v1/order.router');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// v1 api routes
app.use('/', routes);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDb...');
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Listening to port ${port}...`);
    });
  })
  .catch((err) => console.log(err));