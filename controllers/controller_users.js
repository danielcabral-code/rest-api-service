const user = require("../models/model_users")
const utilities = require('../utilities/utilities')
const bcrypt = require('bcrypt');

const register = (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {

            const userToCreate = new user({ email: req.body.email, name: req.body.name, password: hash, height: req.body.height, birth: req.body.birth, weight: req.body.weight, photoUrl: req.body.photoUrl });

            user.find({ email: req.body.email }, function (err, user) {
                if (err) {
                    res.status(400).send(err);
                }

                if (user.length > 0) {
                    res.status(406).send("Duplicated User");
                } else {

                    userToCreate.save(function (err, newUser) {
                        if (err) {
                            res.status(400).send(err);
                        }
                        res.status(200).json("Registered User");
                    })
                }
            })
        });
    });
}

const login = (req, res) => {

    user.find({ email: req.body.email }, function (err, user) {
        if (err) {
            res.status(400).send(err);
        }

        if (user.length > 0) {

            bcrypt.compare(req.body.password, user[0].password).then(function (result) {
                if (result) {
                    utilities.generateToken({ email: req.body.email, id: user[0]._id, name: user[0].name, birth: user[0].birth, photoUrl:user[0].photoUrl }, (token) => {
                        res.status(200).send({
                            message: "Auth",
                            token: token
                        })
                    })
                } else {
                    res.status(401).send("Not Authorized");
                }
            });


        } else {
            res.status(401).send("Not Authorized");
        }

    })
}

const checkEmail = (req, res) => {

    user.find({ email: req.body.email }, function (err, user) {
        if (err) {
            res.status(400).send(err);
        }

        if (user.length > 0) {
            res.status(406).send("This email is already in use");

        }
        else { res.status(200).send("Available email for use") }
    })


}

const resetPassword = (req, res) => {

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            let new_password = {
                password:hash
            };
            user.updateOne({email: req.params.email},new_password, function (err, user) {
                if (err) {
                    res.status(400).send(err);
                }
                res.status(200).json(user);
            })
        });
    })
   
}



exports.login = login;
exports.register = register;
exports.checkEmail = checkEmail
exports.resetPassword = resetPassword
