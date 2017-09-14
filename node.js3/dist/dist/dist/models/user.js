"use strict";

var mongoose = require("mongoose");

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

// UserSchema.statics = {
//     insert : function (formData, callback) {
//         var obj = {
//             name: formData.name,
//             username: formData.username,
//             email: formData.email,
//         };
//         this.create(obj,function (err, data) {
//             if (err) return callback(err, null);
//             return callback(null, data.id);
//         });

//         // this.name = formData.name;
//         // this.username = formData.username;
//         // this.email = formData.email;
//         // user1.save(function (err, data) {
//         //     if (err) return callback(err, null);
//         //     return callback(null, data.id);
//         // });
//     }

// }

// UserSchema.statics = {
//     insert : function (formData, callback) {
//         var obj = {
//             name: formData.name,
//             username: formData.username,
//             email: formData.email,
//         };
//         this.create(obj,function (err, data) {
//             if (err) return callback(err, null);
//             return callback(null, data.id);
//         });

//         // this.name = formData.name;
//         // this.username = formData.username;
//         // this.email = formData.email;
//         // user1.save(function (err, data) {
//         //     if (err) return callback(err, null);
//         //     return callback(null, data.id);
//         // });
//     }

// }


UserSchema.statics = {
    insert: function insert(formData) {
        var _this = this;

        return new Promise(function (resolve, reject) {
            console.log('satics insert', formData);

            var obj = {
                name: formData.name,
                username: formData.username,
                email: formData.email
            };

            console.log('username is ', obj);

            _this.create(obj).then(function (data) {
                console.log('>>>>>>>>>>>>>>>>>>', data);
                return resolve(data);
            }).catch(function (error) {
                console.log('>>>>>>>>>>>>>>>>>>', error);
                return reject(error);
            });
        });
    },
    find: function find(uID) {
        that = this;
        return new Promise(function (resolve, reject) {
            that.findOne({
                _id: uID
            }).then(function (data) {
                return resolve(data);
            }).catch(function (error) {
                return reject(error);
            });
        });
    }
};

module.exports = mongoose.model('User', UserSchema);