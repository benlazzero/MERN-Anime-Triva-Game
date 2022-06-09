// https://animechan.vercel.app/ <- this is the api
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
const gameRoute = require('./routes/game-route');
const dashboardRoute = require('./routes/dashboard-route');
const statusError = require('./middleware/status-error');
//const scraper = require('./scraper.js');

const app = express();

app.get('/favicon.ico', (req, res) => res.status(204)); //todo get real favicon

app.use(cors());
app.use(statusError);
app.use(gameRoute);
app.use(dashboardRoute);
//app.use(scraper);

mongoose.connect(uri)
  .then(() => {
    app.listen(4000)
    console.log('listening on port 4000');
  })
  .catch(err => {
    console.log(err)
  });


