// require dependencies

var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/mini";

var app = express();

app.set('view engine', 'ejs');                      //// uncomment when you start working on the front end!

// configure app

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname + '/public'));     //// uncomment when you start working on the front end!

mongoose.connect(DB_URI);

app.use(router);

// connecting to port 8080

app.listen(8080, function(){


    console.log("Server is listening on port 8080");

});
