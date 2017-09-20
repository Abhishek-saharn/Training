"use strict";

var mongoose = require("mongoose");
var ObjectId = require("mongojs").ObjectID;
var jwt = require("jsonwebtoken");
var config = require('../config.js');

var Schema = mongoose.Schema;

function email_validator(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function name_validator(input) {
    return (/^[A-z0-9]+$/.test(input)
    );
}

var customMail = [email_validator, "Email not valid"];
var customName = [name_validator, "Name must Be alpha-Numeric"];

var UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        validate: customMail
    },
    name: {
        type: String,
        required: true,
        validate: customName
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }

});

UserSchema.statics = {
    insert: function insert(formData) {
        var _this = this;

        return new Promise(function (resolve, reject) {

            var obj = {
                name: formData.name,
                username: formData.username,
                email: formData.email,
                password: formData.password
            };

            _this.create(obj).then(function (data) {

                return resolve(data.id);
            }).catch(function (error) {

                return reject(error);
            });
        });
    },
    login: function login(formData) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
            _this2.findOne({
                username: formData.username
            }).then(function (user) {
                if (user.password != formData.password) {
                    console.log("Not matched", user.password, formData.password);
                    return reject("Wrong Password");
                } else {
                    console.log("Matched", user.password, formData.password);
                    var token = jwt.sign({
                        user: user
                    }, config.secret, {
                        expiresIn: '10m',
                        algorithm: 'HS256'
                    });
                    return resolve(token);
                }
            }).catch(function (err) {
                console.log(err);
                return reject(err);
            });
        });
    },
    authUser: function authUser(token) {
        return new Promise(function (resolve, reject) {
            if (token) {
                jwt.verify(token, config.secret, function (error, data) {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(data);
                });
            } else {
                return reject("No token Found!");
            }
        });
    },
    find: function find(uID) {
        var _this3 = this;

        return new Promise(function (resolve, reject) {
            _this3.findOne({
                "_id": ObjectId(uID)
            }).then(function (data) {
                return resolve(data);
            }).catch(function (error) {
                return reject(error);
            });
        });
    },
    update: function update(uID, name) {
        var _this4 = this;

        return new Promise(function (resolve, reject) {
            _this4.updateOne({
                _id: ObjectId(uID)
            }, {
                $set: {
                    "name": name
                }
            }).then(function (data) {
                return resolve(uID);
            }).catch(function (err) {
                return reject(err);
            });
        });
    },
    udelete: function udelete(uID) {
        var _this5 = this;

        return new Promise(function (resolve, reject) {

            _this5.deleteOne({
                _id: ObjectId(uID)
            }).then(function (data) {
                return resolve(data);
            }).catch(function (err) {
                return reject(err);
            });
        });
    }

};

module.exports = mongoose.model('User', UserSchema);