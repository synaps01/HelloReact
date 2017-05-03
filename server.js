var express = require('express');

// Create the app
var app = express();

app.use(express.static('public'));

app.lsiten(3000, funciton(){
  console.log('Express server is up on port 3000')
});
