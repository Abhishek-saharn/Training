'use strict';

require("babel-core/register");
var express = require('express');
var body_parser = require('body-parser');
var cookie_parser = require('cookie-parser');
var mongoose = require("mongoose");
var userRoute = require('./api/user/user.route.js');
var config = require('./config.js');
var app = express();

// mongoose.promise = global.promise;

mongoose.connect(config.database, function (error) {
    if (error) {
        console.log('Please make sure mongo DB is running');
        throw error;
    } else {
        console.log('Mongo is running');
    }
});

app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: true
}));
app.use(cookie_parser());

app.use('/api', userRoute);

app.set('jwtSecret', config.secret);

app.listen(process.env.PORT || 8000, function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Server started");
});