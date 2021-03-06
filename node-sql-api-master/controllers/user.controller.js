const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const AuthToken = db.validations;
const randomString = require('random-string');
const { Base64 } = require('js-base64');
const BASE_URL = "localhost:5000/api/login/validate/";
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey('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');
const axios =require('axios');
const SHA256 = require("crypto-js/sha256");
// Create and Save a new user
const nodemailer = require('nodemailer');


exports.create = (req, res) => {
    // Validate request
    if (!req.body.username || !req.body.email) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    let pw=SHA256(req.body.password).toString();

    const user = {
        username: req.body.username,
        fname: req.body.fname,
        lname: req.body.lname,
        userType: req.body.userType,
        email: req.body.email,
        password:pw,
        contactnumber: req.body.contactnumber,
        status:req.body.status,
        alumnistatus:0,
        isActive: false,
    };

    // Save user in the database
    User.create(user)
        .then(data => {

            //Create the validation token for the email
            let token = randomString({ length: 100 });
            let tokenObject = {
                email: req.body.email,
                token: token
            }
            AuthToken.create(tokenObject).then(response => {
                let validationString = req.body.email + ":" + token;
                let validationURL = BASE_URL + Base64.encode(validationString);
                console.log(validationURL);
                const msg = {
                    to: req.body.email, // Change to your recipient
                    from: 'info@richmun.org', // Change to your verified sender
                    subject: 'Vaidate Your Email',
                    html: '<strong>Please click the below link and verify your email.</strong><br><a href="'+validationURL+'">'+validationURL+'</a>',
                }

                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'ucscathwala@gmail.com',
                        pass: '2018cs140'
                    }
                });

                var mailOptions = {
                    from: 'ucscathwala@gmail.com',
                    to: req.body.email,
                    subject: 'Sending Email using Node.js',
                    text:  "open the below link:            "+validationURL,

                };

                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ----- ' + info.response);
                    }
                });










                sendGridMail
                    .send(msg)
                    .then(() => {
                        console.log('Email sent')
                    })
                    .catch((error) => {
                        res.status(400).send({
                            message: err.message || "Some error occurred while creating the user."
                        });
                    })

            }).then(() => {
                res.status(200).send({ "status": "success", "data": data, "token": token })
            })
                .catch(err => {
                    res.status(400).send({
                        message: err.message || "Some error occurred while creating the user."
                    });
                })
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        })
        .then(async function createUser() {
            let cap="";
            let em="";
            let un="";

            if(user.userType=="STUDENT"||user.userType=="UNIONST") {
                 cap = user.email.toUpperCase();
                em = cap.substr(0, cap.indexOf('@'));
                un = user.username.concat("(", em, ")");
            }else if(user.userType=="ALUMNI") {
                un = user.username.concat("- Alumni");
            }else if(user.userType=="COUNSELLOR") {
                un = user.username.concat("- Counsellor");
            }else if(user.userType=="ADMIN") {
                cap = user.email.toUpperCase();
                un = cap;
            }
        const data = {
            username: un,
            secret:  "Ur0771110052",
            first_name: user.fname,
            last_name: user.lname,
        };
        var config = {
            method: "post",
            url: "https://api.chatengine.io/users/",
            headers: {
                "PRIVATE-KEY": "ee34c264-42b5-4410-a76c-7459e91c0e09",
            },
            data: data,
        };
        try {
            const resp = await axios(config);
            return resp.data;
        } catch (err) {
            console.error(err);
        }

    });
    /*
        var http = require('http');
       var options = {
             headers: {'PRIVATE-KEY': 'ee34c264-42b5-4410-a76c-7459e91c0e09'}
            "username": user.username,
            "first_name": user.fname,
            "last_name": user.lname ,
            "secret": "Ur0771110052"
        };

        callback = function(response) {
            var str = '';

            //another chunk of data has been received, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
            });

            //the whole response has been received, so we just print it out here
            response.on('end', function () {
                console.log(str);
            });
        }

        http.request(options, callback).end();
    */
/*
    const https = require('https')

    const data = new TextEncoder().encode(
        JSON.stringify({
            username: user.username,
            first_name: user.fname,
            last_name: user.lname ,
            secret:user.secret
        })
    )

    const options = {
        hostname: 'api.chatengine.io',
        path: '/users',
        method: 'POST',
        headers: {
            'PRIVATE-KEY': 'ee34c264-42b5-4450-a76c-7459e91c0e09'
        }
    }

    const reqe= https.request(options, resp => {
        console.log(`statusCode: ${res.statusCode}`)

        resp.on('data', d => {
            process.stdout.write(d)
        })
    })

    reqe.on('error', error => {
        console.error(error)
    })

    reqe.write(data)
    reqe.end()
    res.send("dsds");
*/


};






// Find a single User with an id
exports.findOne = (req, res) => {
    console.log(req.body)
    const un = req.params.username;

    User.findByPk(un)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with username=" + un
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const un = req.params.username;

    User.update(req.body, {
        where: { username: un }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update user with username=${un}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating user with username=" + username
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const un = req.params.username;

    User.destroy({
        where: { username: un }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete user with username=${un}. Maybe user was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete user with username=" + un
            });
        });
};
