const db = require("../models");
const User = db.users;
const AuthToken = db.validations
const Op = db.Sequelize.Op;
const { Base64 } = require('js-base64');
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey('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');


// Login a user
exports.login = (req, res) => {
    // Validate request
    if (!req.body.password || !req.body.email) {
        res.status(400).send({
            message: "username or password can not be empty!"
        });
        return;
    }

    User.findAll({
        where: {
            email: req.body.email
        }
    }).then(data => {
        let response = (data[0].dataValues);
        if (response.isActive === false || response.isActive == 0) {
            res.status(401).send({
                status: "unauthorized",
                message: "Please confirm your email before login."
            });
        }
        if (response.password === req.body.password) {
            //Generate a token if the password matches
            res.status(200).send({
                status: "success",
                data: response
            })
        }
    }).catch(err => {
        console.log(err)
        res.status(500).send({
            message: "Error retrieving User with email=" + req.body.email
        });
    });
};

// validate a token
exports.validate = (req, res) => {
    // Validate request
    if (!req.params.token) {
        res.status(400).send({
            message: "Invalid URL!"
        });
        return;
    }

    let decodedString = Base64.decode(req.params.token);
    let decodedParams = decodedString.split(":");
    console.log(decodedParams)

    AuthToken.findAll({
        where: {
            email: decodedParams[0]
        }
    }).then(data => {
        let response = (data[0].dataValues);
        if (response.token === decodedParams[1]) {
            User.update({ isActive: true }, {
                where: { email: decodedParams[0] }
            }).then(() => {
                AuthToken.destroy({
                    where: {
                        email: decodedParams[0]
                    }
                })
            }).then(() => {
                res.status(200).send({
                    status: "success",
                    message: "Successfully validated!"
                });
            }).catch(err => {
                console.log(err)
                res.status(500).send({
                    status: "error",
                    message: "Error while validating the user"
                });
            })
        }

    }).catch(err => {
        console.log(err)
        res.status(500).send({
            status: "error",
            message: "Error while validating the user"
        });
    });
};

