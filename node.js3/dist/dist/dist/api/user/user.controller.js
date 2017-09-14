'use strict';

var _helper = require('../../utils/helper');

var User = require('../../models/user');

exports.saveUser = function (req, res) {
    var formdata = {
        username: req.body.username,
        email: req.body.email,
        name: req.body.name
    };
    User.insert(formdata).then(function (data) {
        return res.send((0, _helper.helper)("ok", data));
    }).catch(function (error) {
        return res.send((0, _helper.helper)("Error", error));
    });
};
exports.findUser = function (req, res) {
    var uID = req.params.uID;
    console.log(uID);
    User.find(uID).then(function (data) {
        res.send((0, _helper.helper)("ok", data));
    }).catch(function (error) {
        console.log(error);
        res.send((0, _helper.helper)("Error", error));
    });
};