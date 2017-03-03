// require dependencies

var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('client-sessions');
var DB_URI = "mongodb://localhost:27017/mini";


var app = express();

app.set('view engine', 'ejs');

// configure app

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname + '/public'));

mongoose.connect(DB_URI);


app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

app.use(router);

//
session.loggedIn = false;
//console.log(session.loggedIn);

// connecting to port 8080

app.listen(8080, function(){


    console.log("Server is listening on port 8080");

});
