'use strict';

var _user = require('./user.controller');

var router = require('express').Router();

router.route('/user').post(_user.saveUser);
router.route('/login').post(_user.login);
router.route('/user/:uID').get(_user.findUser);
router.route('/user/:uID/:name').put(_user.updateUser);
router.route('/user/:uID').delete(_user.deleteUser);
module.exports = router;