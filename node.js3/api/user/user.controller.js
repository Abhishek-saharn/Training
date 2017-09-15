const User = require('../../models/user');
import {
    helper
} from '../../utils/helper';

export let saveUser = function (req, res) {
    var formdata = {
        username: req.body.username,
        email: req.body.email,
        name: req.body.name
    }
    User.insert(formdata)
        .then((data) => {
            return res.send(helper("ok", data));
        })
        .catch((error) => {
            return res.send(helper("Error", error));
        });
}
export let findUser = (req, res) => {
    let uID = req.params.uID;
    User.find(uID)
        .then((data) => {
            res.send(helper("ok", data));
        })
        .catch((error) => {
            console.log(error);
            res.send(helper("Error", error));
        });
}

export let updateUser = (req, res) => {
    let uID = req.params.uID;
    let name = req.params.name;
    User.update(uID, name)
        .then(function (data) {
            res.send(helper("ok", data));
        })
        .catch(function (err) {
            res.send(helper("error", err));
        });
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