const mongoose = require("mongoose")
const ObjectId = require("mongojs").ObjectID;
const jwt = require("jsonwebtoken");
const config = require('../config.js');

const Schema = mongoose.Schema;

function email_validator(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function name_validator(input) {
    return /^[A-z0-9]+$/.test(input);
}


let customMail = [email_validator, "Email not valid"];
let customName = [name_validator, "Name must Be alpha-Numeric"];


let UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
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
        required: true,
    },

});


UserSchema.statics = {
    insert: function (formData) {
        return new Promise((resolve, reject) => {

            const obj = {
                name: formData.name,
                username: formData.username,
                email: formData.email,
                password: formData.password,
                role: formData.role
            };

            this.create(obj)
                .then(data => resolve(data.id))
                .catch(error => reject(error));
        });
    },
    login: function (formData) {
        return new Promise((resolve, reject) => {
            this.findOne({
                    username: formData.username
                })
                .then((user) => {
                    if (user.password != formData.password) {
                        console.log("Not matched", user.password, formData.password)
                        return reject("Wrong Password");
                    } else {
                        console.log("Matched", user.password, formData.password)
                        var token = jwt.sign({
                            user
                        }, config.secret, {
                            expiresIn: '10m',
                            algorithm: 'HS256'
                        });
                        return resolve(token);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    return reject(err);
                });
        });
    },
    authUser: function (token) {
        return new Promise((resolve, reject) => {
            if (token) {
                jwt.verify(token, config.secret, (error, data) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(data);
                });
            } else {
                return reject("No token Found!")
            }
        });
    },
    find: function (uID) {

        return new Promise((resolve, reject) => {
            this.findOne({
                    "_id": ObjectId(uID)
                })
                .then((data) => {
                    return resolve(data)
                })
                .catch((error) => {
                    return reject(error)
                });
        });
    },
    update: function (uID, name) {
        return new Promise((resolve, reject) => {
            this.updateOne({
                    _id: ObjectId(uID)
                }, {
                    $set: {
                        "name": name
                    }
                })
                .then((data) => {
                    return resolve(uID);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    },
    udelete: function (uID) {
        return new Promise((resolve, reject) => {

            this.deleteOne({
                    _id: ObjectId(uID)
                }).then((data) => {
                    return resolve(data)
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }

}


module.exports = mongoose.model('User', UserSchema);