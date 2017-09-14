"use strict";

var mongoose = require("mongoose");
var ObjectId = require("mongojs").ObjectID;

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
    }
});

UserSchema.statics = {
    insert: function insert(formData) {
        var _this = this;

        return new Promise(function (resolve, reject) {

            var obj = {
                name: formData.name,
                username: formData.username,
                email: formData.email
            };

            _this.create(obj).then(function (data) {

                return resolve(data.id);
            }).catch(function (error) {

                return reject(error);
            });
        });
    },
    find: function find(uID) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
            console.log(_this2);

            _this2.findOne({
                "_id": ObjectId("59ba58428c06264c5ddb155a")
            }).then(function (data) {
                console.log(data);
                return resolve(data);
            }).catch(function (error) {
                return reject(error);
            });
        });
    }
};

module.exports = mongoose.model('User', UserSchema);