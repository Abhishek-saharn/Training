import User from '../../models/user';
import {
    helper
} from '../../utils/helper';
import {
    permission
} from '../../utils/permission';



export const saveUser = function (req, res) {
    var formdata = {
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        role: req.body.role,
    }
    User.insert(formdata)
        .then((data) => {
            return res.send(helper("ok", data));
        })
        .catch((error) => {
            return res.send(helper("Error", error));
        });
}


export const login = function (req, res) {
    var formdata = {
        username: req.body.username,
        password: req.body.password
    }
    User.login(formdata)
        .then((data) => {
            return res.send(helper("ok", data));
        })
        .catch((error) => {
            return res.send(helper("Error", error));
        });
}


export const authUser = (req, res, next) => {
    var token = req.body.token || req.headers['access-token'];

    User.authUser(token)
        .then((data) => {
            req.decoded = data;
            next();
        })
        .catch((err) => {});
}


export const findUser = (req, res) => {
    const role = req.decoded.user.role;
    if (permission[role].read) {

        const uID = req.params.uID;
        User.find(uID)
            .then((data) => {
                if (true) {

                    res.send(helper("ok", data));
                } else {
                    res.send(helper("Error", 'You are not authorized'));
                }

            })
            .catch((error) => {
                res.send(helper("Error", error));
            });
    } else {
        res.send(helper("Error", 'You are not authorized'));
    }
}


export const updateUser = (req, res) => {
    const role = req.decoded.user.role;
    if (permission[role].update) {
        const uID = req.params.uID;
        const name = req.params.name;
        if (req.decoded.user._id === uID) {
            User.update(uID, name)
                .then(function (data) {
                    res.send(helper("ok", data));
                })
                .catch(function (err) {
                    res.send(helper("error", err));
                });
        } else {
            res.send(helper("error", "Not Authorize"));
        }
    } else {
        res.send(helper("Error", 'You are not authorized'));
    }
}


export const deleteUser = (req, res) => {
    const uID = req.params.uID;
    User.udeconste(uID)
        .then(function (data) {
            res.send(helper("ok", data));

        })
        .catch(function (err) {

            res.send(helper("error", err));

        });

}