var User = require('../../models/user');

var saveUser = function (req, res) {
    
    console.log(User.insertMany(req,res));

    // var user = new User;
    // user.username = req.body.username;
    // user.email = req.body.email;
    // user.name = req.body.name;

    // user.save(function (err) {
    //     if (err) {
    //         console.log(err);
    //         res.send({
    //             "status": "Failed! Invalid inputs"
    //         })

    //     } else {

    //         res.send({
    //             "name": user.name,
    //             "email": user.email,
    //             "username": user.username
    //         })
    //     }
    // });




}
module.exports = saveUser;