var mongoose = require("mongoose")

var Schema = mongoose.Schema;

function email_validator(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function name_validator(input){
    return /^[A-z0-9]+$/.test(input);
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

UserSchema.statics.insert = function(username, user, name){

    // mongo // username user name ;

    // return query ans;

    // return error;
    
}


module.exports = mongoose.model('Users',UserSchema);