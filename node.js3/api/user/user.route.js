var router = require('express').Router();
import {
    saveUser,
    findUser,
    updateUser,
    deleteUser
} from './user.controller';
router.route('/user').post(saveUser)
router.route('/user/:uID').get(findUser);
router.route('/user/:uID/:name').put(updateUser);
router.route('/user/:uID').delete(deleteUser);
module.exports = router;