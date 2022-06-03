// https://animechan.vercel.app/ <- this is the api
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const gameRoute = require('./routes/game-route');
const dashboardRoute = require('./routes/dashboard-route');
const statusError = require('./middleware/status-error');

const app = express();

app.use(cors());
app.use(statusError);
app.use(gameRoute);
app.use(dashboardRoute);

mongoose.connect('mongodb+srv://blazzero:mongo123@cluster0.askmg.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4000)
    console.log('listening on port 4000');
  })
  .catch(err => {
    console.log(err)
  });
