import User from '../../models/user';
import {
    helper
} from '../../utils/helper';



export let saveUser = function (req, res) {
    var formdata = {
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    }
    User.insert(formdata)
        .then((data) => {
            return res.send(helper("ok", data));
        })
        .catch((error) => {
            return res.send(helper("Error", error));
        });
}


export let login = function (req, res) {
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


export let authUser = (req, res, next) => {
    var token = req.body.token || req.headers['access-token'];

    User.authUser(token)
        .then((data) => {
            req.decoded = data;
            next();
        })
        .catch((err) => {
            console.log(err);
        });


}


export let findUser = (req, res) => {
    let uID = req.params.uID;
    User.find(uID)
        .then((data) => {
            if (data._id == req.decoded.user._id) {

                res.send(helper("ok", data));
            } else {
                res.send(helper("Error", 'You are not authorized'));
            }

        })
        .catch((error) => {
            res.send(helper("Error", error));
        });
}


export let updateUser = (req, res) => {
    let uID = req.params.uID;
    let name = req.params.name;
    if (req.decoded.user._id == uID) {
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

}


export let deleteUser = (req, res) => {
    let uID = req.params.uID;
    User.udelete(uID)
        .then(function (data) {
            res.send(helper("ok", data));

        })
        .catch(function (err) {
            console.log(err)
            res.send(helper("error", err));

        });

}