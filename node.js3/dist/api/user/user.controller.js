'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reqRole = exports.deleteUser = exports.updateUser = exports.findUser = exports.authUser = exports.login = exports.saveUser = undefined;

var _user = require('../../models/user');

var _user2 = _interopRequireDefault(_user);

var _helper = require('../../utils/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saveUser = exports.saveUser = function saveUser(req, res) {
    var formdata = {
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    };
    _user2.default.insert(formdata).then(function (data) {
        return res.send((0, _helper.helper)("ok", data));
    }).catch(function (error) {
        return res.send((0, _helper.helper)("Error", error));
    });
};

var login = exports.login = function login(req, res) {
    var formdata = {
        username: req.body.username,
        password: req.body.password
    };
    _user2.default.login(formdata).then(function (data) {
        return res.send((0, _helper.helper)("ok", data));
    }).catch(function (error) {
        return res.send((0, _helper.helper)("Error", error));
    });
};

var authUser = exports.authUser = function authUser(req, res, next) {
    var token = req.body.token || req.headers['access-token'];

    _user2.default.authUser(token).then(function (data) {
        req.decoded = data;
        next();
    }).catch(function (err) {
        console.log(err);
    });
};

var findUser = exports.findUser = function findUser(req, res) {
    var uID = req.params.uID;
    _user2.default.find(uID).then(function (data) {
        if (data._id == req.decoded.user._id) {

            res.send((0, _helper.helper)("ok", data));
        } else {
            res.send((0, _helper.helper)("Error", 'You are not authorized'));
        }
    }).catch(function (error) {
        res.send((0, _helper.helper)("Error", error));
    });
};

var updateUser = exports.updateUser = function updateUser(req, res) {
    var uID = req.params.uID;
    var name = req.params.name;
    if (req.decoded.user._id == uID) {
        _user2.default.update(uID, name).then(function (data) {
            res.send((0, _helper.helper)("ok", data));
        }).catch(function (err) {
            res.send((0, _helper.helper)("error", err));
        });
    } else {
        res.send((0, _helper.helper)("error", "Not Authorize"));
    }
};

var deleteUser = exports.deleteUser = function deleteUser(req, res) {
    var uID = req.params.uID;
    _user2.default.udelete(uID).then(function (data) {
        res.send((0, _helper.helper)("ok", data));
    }).catch(function (err) {
        console.log(err);
        res.send((0, _helper.helper)("error", err));
    });
};

var reqRole = exports.reqRole = function reqRole(role) {
    return function (req, res, next) {
        console.log(req.decoded.user.role);
        if (req.decoded.user.role == role) {
            next();
        } else {
            console.log("You are not authorized");
        }
    };
};