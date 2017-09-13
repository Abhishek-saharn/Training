var router = require('express').Router();
var usercontroller = require('./usercontroller');
router.route('/user')
    .post(usercontroller)
    .get(function (req, res) {
        res.send("hello api");
    });

module.exports = router;