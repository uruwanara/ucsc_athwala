const db = require("../models");
const connection = require("../dbConnection");

//Create a fundraising


exports.create = (req, res) => {
    // console.log(req.body);
    // var current = new Date();
    // console.log(current.toLocaleDateString());
    const createby = req.body.create_by;
    // const fundID = req.body.fundID;
    const fundName = req.body.fundname;
    const fundDescription = req.body.funddescription;
    const fundImage = req.body.image;
    const fundStartAmount = req.body.startamount;
    const fundGoalAmount = req.body.goalamount;
    // const fundStartDate = req.body.fundStartDate;
    // var fundStartDate = current.toLocaleDateString();
    // const fundStartTime = req.body.fundStartTime;
    const fundExpireDate = req.body.expiredate;
    const fundExpireTime = req.body.expiretime;


    connection.query('INSERT INTO fundraising (fundName,fundStartedBy,fundDescription,fundImage,fundStartAmount,fundGoalAmount,fundStartDate,fundStartTime,fundExpireDate,fundExpireTime,fundStatus) VALUES(?,?,?,?,?,?,NOW(),NOW(),?,?,?)', [fundName,createby,fundDescription, fundImage, fundStartAmount, fundGoalAmount,fundExpireDate, fundExpireTime,2], (err, result) => {
        if (err) { console.log(err) } else { res.json("success") }
    });
}

//view the available fundraising only
exports.viewall = (req, res) => {
    connection.query('SELECT * from fundraising WHERE fundStatus = 2;',
        (err, result, fileds) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
}

//view the expired fundraising only
exports.viewallex = (req, res) => {
    connection.query('SELECT * from fundraising WHERE fundStatus = 0;',
        (err, result, fileds) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
}

//view the ended fundraising only
exports.viewallend = (req, res) => {
    connection.query('SELECT * from fundraising WHERE fundStatus = 1;',
        (err, result, fileds) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
}

exports.viewbyid = (req,res) => {
    // const fundID =req.params.fundID;
    const fundID= req.body.fundID;
    
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
