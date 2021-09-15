const db = require("../models");
const connection = require("../dbConnection");

//Create a fundraising


exports.create = (req, res) => {
    console.log(req.body);
    // var current = new Date();
    // console.log(current.toLocaleDateString());

    const fundID = req.body.fundID;
    const fundName = req.body.fundName;
    const fundDescription = req.body.fundDescription;
    const fundImage = req.body.fundImage;
    const fundStartAmount = req.body.fundStartAmount;
    const fundGoalAmount = req.body.fundGoalAmount;
    const fundStartDate = req.body.fundStartDate;
    // var fundStartDate = current.toLocaleDateString();
    const fundStartTime = req.body.fundStartTime;
    const fundExpireDate = req.body.fundExpireDate;
    const fundExpireTime = req.body.fundExpireTime;


    connection.query('INSERT INTO fundraising (fundID,fundName,fundDescription,fundImage,fundStartAmount,fundGoalAmount,fundStartDate,fundStartTime,fundExpireDate,fundExpireTime) VALUES(?,?,?,?,?,?,?,?,?,?)', [fundID, fundName, fundDescription, fundImage, fundStartAmount, fundGoalAmount, fundStartDate, fundStartTime, fundExpireDate, fundExpireTime], (err, result) => {
        if (err) { console.log(err) } else { res.json("success") }
    });
}

exports.viewall = (req, res) => {
    connection.query('SELECT * from fundraising;',
        (err, result, fileds) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
}

exports.viewbyid = (req,res) => {
    const fundID =req.params.fundID;
   
    
    connection.query( 'SELECT * FROM fundraising WHERE fundID = ? ;',
    [fundID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }

    );
};

exports.deletebyid = (req,res) => {
    const fundID =req.params.fundID;
   
    
    connection.query( 'DELETE FROM fundraising WHERE fundID = ? ;',
    [fundID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }

    );
};
