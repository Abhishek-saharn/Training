'use strict';

var router = require('express').Router();
var usercontroller = require('./user.controller');
router.route('/user').post(usercontroller.saveUser);
router.route('/user/:uID').get(usercontroller.findUser);

module.exports = router;