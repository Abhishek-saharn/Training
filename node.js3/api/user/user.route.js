const router = require('express').Router();

import {
    saveUser,
    login,
    findUser,
    updateUser,
    deleteUser,
    authUser,
} from './user.controller';

router.route('/user').post(saveUser);
router.route('/login').post(login);
router.route('/user/:uID').get(authUser, findUser);
router.route('/user/:uID/:name').put(authUser, updateUser);
router.route('/user/:uID').delete(deleteUser);

module.exports = router;