const db = require("../models");
const connection = require("../dbConnection")


// in donation table if active column = 1 then donation is active. if active column = 0 then donation is not active.
// in donation table if status = 0 then donation is Not Received
// in donation table if status = 1 then donation is Pending
// in donation table if status = 2 then donation is Received

exports.viewall = (req, res) => {
    connection.query('Select * from donations where active = 1 and status = 0;',
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
    const subject = req.body.subject;
    const lesson = req.body.lesson;
    const date = req.body.date;
    const type = 'note';
    
    connection.query( 'insert into donations (donationType,title,description,student_id) values(?,?,?,?);',
    [type,title,description,studentID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } 
        else{
            connection.query( 'SELECT donationID from donations order by donationID DESC LIMIT 1; ',
                    (err1, results,fields) => {
                        if (err1) {
                            res.send(err1);
                        } else {
                            let donationIDmax = results[0].donationID;
                            connection.query( 'insert into note (donation_id,year,subject,lesson,before_date) values(?,?,?,?,?); ',
                                [donationIDmax,year,subject,lesson,date],
                                (err2, result,fields) => {
                                    if (err2) {
                                        res.send(err2);
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

exports.search = (req, res) => {
    const message = req.body.search; 

    connection.query("Select * from donations where (title "+ "like'%"+ message+"%'"+" or description "+"like'%"+ message+"%')" + " AND active = 1 and status = 0;",
    (err, result,fields) => { 
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
};

exports.contact = (req, res) => {
    const donationID = req.body.donationID;
    const userID = req.body.userID;
    const type = req.body.type;
    const tel = req.body.tel;
    const address = req.body.address;

    connection.query("UPDATE donations SET status = 1 where donationID = ?",
    [donationID],
    (err, result,fields) => { 
        if (err) {
            res.send(err);
        } else {

            connection.query("UPDATE ?? SET status = 'Pending' where donation_id = ?",
            [type,donationID],
            (err1, result,fields) => { 
                if (err) {
                    res.send(err1);
                } else {

                    connection.query("insert into doners (donation_id,doner_id,tel,address) values(?,?,?,?);",
                    [donationID,userID,tel,address],
                    (err2, result,fields) => { 
                        if (err) {
                            res.send(err2);
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

exports.donerdetails = (req, res) => {
        const donationid = req.body.donationid;

    connection.query("select users.fname , users.lname , doners.donate_at , doners.tel, doners.address FROM users INNER JOIN doners ON users.id = doners.doner_id WHERE doners.donation_id = ?",
    [donationid],
    (err, result,fields) => { 
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
    );

}

exports.markstatus = (req, res) => {
    const donationid = req.body.donationID;
    const type = req.body.type;

connection.query("update donations set status = 2 where donationID = ?",
[donationid],
(err, result,fields) => { 
    if (err) {
        res.send(err);
    } else {
        connection.query("update ?? set status = 'Received' where donation_id = ?",
            [type,donationid],
            (err1, result,fields) => { 
                if (err1) {
                    res.send(err1);
                } else {
                    res.send("success");
                }
            }
        );
    }
}
);

}

exports.myhistory = (req, res) => {
    const userid = req.query.id;

connection.query("select donations.donationID , donations.donationType , donations.description , donations.createdAt , donations.status, doners.donate_at FROM donations INNER JOIN doners ON donations.donationID = doners.donation_id WHERE doners.doner_id = ?",
[userid],
(err, result,fields) => { 
    if (err) {
        res.send(err);
    } else {
        res.send(result);
    }
}
);

}




