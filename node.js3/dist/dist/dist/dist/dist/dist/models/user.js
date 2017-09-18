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
            _this2.findOne({
                "_id": ObjectId(uID)
            }).then(function (data) {
                return resolve(data);
            }).catch(function (error) {
                return reject(error);
            });
        });
    },
    update: function update(uID, name) {
        var _this3 = this;

        return new Promise(function (resolve, reject) {
            _this3.updateOne({
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
        var _this4 = this;

        return new Promise(function (resolve, reject) {

            _this4.deleteOne({
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