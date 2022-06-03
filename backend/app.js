// https://animechan.vercel.app/ <- this is the api
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const loginRoute = require('./routes/login-route');

const app = express();

app.use(cors());
app.use(loginRoute);

app.listen(4000, (error) => {
  if(!error) {
    console.log(`server running on port 4000`);
  } else {
    console.log("error occured starting server");
  }
});
