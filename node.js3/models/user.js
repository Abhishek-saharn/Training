const mongoose = require("mongoose")
const ObjectId = require("mongojs").ObjectID;

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
    insert: function (formData) {
        return new Promise((resolve, reject) => {

            const obj = {
                name: formData.name,
                username: formData.username,
                email: formData.email,
            };

            this.create(obj)
                .then((data) => {

                    return resolve(data.id);
                })
                .catch((error) => {

                    return reject(error);
                });
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