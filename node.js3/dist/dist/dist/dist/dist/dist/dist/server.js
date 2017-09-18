"use strict";

require("babel-core/register");
require("./src/config.es6");
var express = require('express');
var body_parser = require('body-parser');
var cookie_parser = require('cookie-parser');
var mongoose = require("mongoose");
var userRoute = require('./api/user/user.route.js');

var app = express();

var num = 10;

mongoose.promise = global.promise;

mongoose.connect('mongodb://localhost/test', function (error) {
    if (error) {
        console.log('Please make sure mongo DB is running');
        throw error;
    } else {
        console.log('Mongo is running');
    }
});

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function () {
//     console.log("we're connected!");
// });


app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: true
}));
app.use(cookie_parser());

app.use('/api', userRoute);

app.listen(process.env.PORT || 8000, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Server started");
});