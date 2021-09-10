const db = require("../models");
const connection = require("../dbConnection")

// Login a Doantion
exports.create = (req, res, err) => {
    console.log(req.body)

    const donationID = req.body.donationID;
    const donationType = req.body.donationType;
    const title = req.body.title;
    const description = req.body.description;

    connection.query('INSERT INTO don (donationID,donationType,title,description,createdAt,updatedAt) VALUES (?,?,?,?,?,?)',
        [donationID, donationType, title, description, "2021-08-29 05:34:45", "2021-08-29 05:34:45"],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json("success")
            }
        }
    );
};


exports.findOne = (req, res) => {
    const donationID =req.params.donationID;

    connection.query('SELECT donationType,title,description,createdAt,updatedAt FROM don where donationID = ? ;',
        [donationID],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
};

exports.delete = (req, res) => {
    const donationID =req.params.donationID;

    connection.query('DELETE * FROM  don WHERE donationID = ? ;',
        [donationID],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
};

exports.allFind = (req, res) => {
    connection.query('SELECT * FROM donations;',
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );

};









// Validate request
// if (!req.body.password || !req.body.email) {
//     res.status(400).send({
//         message: "username or password can not be empty!"
//     });
//     return;
// } //  user gen ganna details validate karaganna
/*
    const donation={
        donationID:req.body.donationID,
        donationType:req.body.donationType,
        title:req.body.title,
        description:req.body.description
    }
    Donation.create(donation).then(data=>{
        if(data){
            res.status(200).send({
                "status": "success",
                "data": data
            })
        }
        else{
            res.status(204).send({
                "status": "faild",
                "data": "no data found"
            })
        }
    }).catch(err=>{
        res.status(500).send({
            "status":err.message
        })
    })
*/

