"use strict";

var user = require("./user");
var collection = {};

collection.user = user;

collection.insert = function (formdata, callback) {
    var user1 = new user();
    user1.name = formdata.name;
    user1.username = formdata.username;
    user1.email = formdata.email;
    user1.save(function (err, data) {
        if (err) return callback(err, null);
        return callback(null, data.id);
    });
};

module.exports = collection;