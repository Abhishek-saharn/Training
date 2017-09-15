'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteUser = exports.updateUser = exports.findUser = exports.saveUser = undefined;

var _helper = require('../../utils/helper');

var User = require('../../models/user');
var saveUser = exports.saveUser = function saveUser(req, res) {
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
var findUser = exports.findUser = function findUser(req, res) {
    var uID = req.params.uID;
    User.find(uID).then(function (data) {
        res.send((0, _helper.helper)("ok", data));
    }).catch(function (error) {
        console.log(error);
        res.send((0, _helper.helper)("Error", error));
    });
};

var updateUser = exports.updateUser = function updateUser(req, res) {
    var uID = req.params.uID;
    var name = req.params.name;
    User.update(uID, name).then(function (data) {
        res.send((0, _helper.helper)("ok", data));
    }).catch(function (err) {
        res.send((0, _helper.helper)("error", err));
    });
};

var deleteUser = exports.deleteUser = function deleteUser(req, res) {
    var uID = req.params.uID;
    User.udelete(uID).then(function (data) {
        res.send((0, _helper.helper)("ok", data));
    }).catch(function (err) {
        console.log(err);
        res.send((0, _helper.helper)("error", err));
    });
};