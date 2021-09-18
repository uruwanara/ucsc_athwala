const db = require("../models");
const connection = require("../dbConnection")

exports.viewall = (req, res) => {
    connection.query('Select * from auction where status = 1 ;',
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
}; 

exports.viewDetails = (req,res) => {
    const donationID =req.body.donationID;
    const type = req.body.type;
    
    connection.query( 'Select * from ?? where donation_id = ? ;',
    [type,donationID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }

    );
};

exports.getTitle = (req,res) => {
    const donationID =req.body.donationID;

    
    connection.query( 'Select * from donations where donationID = ? ;',
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

exports.viewMyall = (req,res) => {
    const studentID =req.query.id;
    connection.query( 'Select * from donations where student_id = ?;',
    [studentID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }

    );
};

exports.noteRequest = (req,res) => {
    const studentID =req.body.studentID;
    const title = req.body.title;
    const description = req.body.description;
    const year = req.body.year;
    // const subject = req.body.subject;
    const Baseprice = req.body.Baseprice;
    const date = req.body.date;
    // const type = 'note';
    
    connection.query( 'insert into auction (title,description,year,baseprice,date,student_id) values(?,?,?,?,?,?);',
    [title,description,year,Baseprice,date,studentID],
    (err, result,fields) => {

        if (err) {
            res.send(err);
        } 
        else{
            res.send("success");
                }
                }
            );
};

exports.clothRequest = (req,res) => {
    const studentID =req.body.studentID;
    const title = req.body.title;
    const description = req.body.description;
    const clothType = req.body.clothType;
    const gender = req.body.gender;
    const size = req.body.size;
    const date = req.body.date;
    const type = 'cloth';
    
    connection.query( 'insert into donations (donationType,title,description,student_id) values(?,?,?,?);',
    [type,title,description,studentID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query( 'SELECT donationID from donations order by donationID DESC LIMIT 1;',
            (err, results,fields) => {
                if (err) {
                    res.send(err);
                } else {
                    let donationID = results[0].donationID;
                    connection.query( 'insert into cloth (donation_id,gender,size,before_date,cloth_type) values(?,?,?,?,?); ',
                    [donationID,gender,size,date,clothType],
                    (err, result,fields) => {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send("success");
                        }
                    }
                    );
                }
            }
            );
        }
    }
    );
};

exports.deviceRequest = (req,res) => {
    const studentID =req.body.studentID;
    const title = req.body.title;
    const description = req.body.description;
    const model = req.body.model;
    const brand = req.body.brand;
    const date = req.body.date;
    const type = 'device';
    
    connection.query( 'insert into donations (donationType,title,description,student_id) values(?,?,?,?);',
    [type,title,description,studentID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query( 'SELECT donationID from donations order by donationID DESC LIMIT 1;',
            (err, results,fields) => {
                if (err) {
                    res.send(err);
                } else {
                    let donationID = results[0].donationID;
                    connection.query( 'insert into device (donation_id,model,brand,before_date) values(?,?,?,?); ',
                    [donationID,model,brand,date],
                    (err, result,fields) => {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send("success");
                        }
                    }
                    );
                }
            }
            );
        }
    }
    );
};

exports.moneyRequest = (req,res) => {
    const studentID =req.body.studentID;
    const title = req.body.title;
    const description = req.body.description;
    const amount = req.body.amount;
    const note = req.body.note;
    const date = req.body.date;
    const type = 'money';
    
    connection.query( 'insert into donations (donationType,title,description,student_id) values(?,?,?,?);',
    [type,title,description,studentID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query( 'SELECT donationID from donations order by donationID DESC LIMIT 1;',
            (err, results,fields) => {
                if (err) {
                    res.send(err);
                } else {
                    let donationID = results[0].donationID;
                    connection.query( 'insert into money (donation_id,amount,note,before_date) values(?,?,?,?); ',
                    [donationID,amount,note,date],
                    (err, result,fields) => {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send("success");
                        }
                    }
                    );
                }
            }
            );
        }
    }
    );
};

exports.otherRequest = (req,res) => {
    const studentID =req.body.studentID;
    const title = req.body.title;
    const description = req.body.description;
    const reason = req.body.reason;
    const date = req.body.date;
    const type = 'other';
    
    connection.query( 'insert into donations (donationType,title,description,student_id) values(?,?,?,?);',
    [type,title,description,studentID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query( 'SELECT donationID from donations order by donationID DESC LIMIT 1; ',
            (err, results,fields) => {
                if (err) {
                    res.send(err);
                } else {
                    let donationID = results[0].donationID;
                    connection.query( 'insert into other (donation_id,reason,before_date) values(?,?,?); ',
                    [donationID,reason,date],
                    (err, result,fields) => {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send("success");
                        }
                    }
                    );
                }
            }
            );
        }
    }
    );
};



