// https://animechan.vercel.app/ <- this is the api
const express = require('express');
const bodyParser = require('body-parser');

const loginRoute = require('./routes/login-route');

const app = express();


app.use(loginRoute);


app.listen(3000, (error) => {
  if(!error) {
    console.log(`server running on port 3000`);
  } else {
    console.log("error occured starting server");
  }
});
