// https://animechan.vercel.app/ <- this is the api
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
require('./passport.js');

const uri = process.env.MONGO_URI;

const gameRoute = require('./routes/game-route');
const dashboardRoute = require('./routes/dashboard-route');
const authRoute = require('./routes/auth');
const createRoute = require('./routes/create');
const updateRoute = require('./routes/update');
const editRoute = require('./routes/edit-user');
const statusError = require('./middleware/status-error');
//const scraper = require('./scraper.js');

const app = express();

app.get('/favicon.ico', (req, res) => res.status(204)); //todo get real favicon

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(statusError);
app.use(session({ 
  secret: 'cow man', 
  cookie: {maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: uri }),
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(gameRoute);
app.use(editRoute);
app.use(dashboardRoute);
app.use("/auth", authRoute);
app.use(createRoute);
app.use(updateRoute);
//app.use(scraper);

mongoose.connect(uri)
  .then(() => {
    app.listen(4000)
    console.log('listening on port 4000');
  })
  .catch(err => {
    console.log(err)
  });


