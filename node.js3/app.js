var express = require('express');
var body_parser = require('body-parser');
var cookie_parser = require('cookie-parser');
var mongoose = require("mongoose")
var userroute = require('./api/user/userroute.js');

var app = express();

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("we're connected!");
  });


app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
app.use(cookie_parser());

app.use('/api',userroute);


app.listen(process.env.PORT||8000, function(err){
    if(err){
        console.log(err);
    }
    console.log("Server started");
})