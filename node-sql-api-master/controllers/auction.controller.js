const db = require("../models");
const connection = require("../dbConnection")

exports.viewall = (req, res) => {
    const studentID =req.query.id;
    connection.query('Select * from auction where student_id != ? AND status=1; ;',
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
exports.getbid = (req, res) => {
    console.log("api")
    const auction_id =req.query.id;
    console.log(auction_id)
    connection.query('Select * from auction where auction_id = ? ;',
    [auction_id],
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

exports.details = (req,res) => {
    console.log("api")
    const auction_id =req.query.id;
    console.log(auction_id)
    connection.query('Select * from auction where auction_id = ? ;',
    [auction_id],
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
    connection.query( 'Select * from auction where student_id = ? AND status=1;',
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

exports.mypast = (req,res) => {
    const studentID =req.query.id;
    connection.query( 'Select * from auction where student_id = ? AND status=2;',
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

exports.mybid = (req,res) => {
    // console.log("api")
     const studentID =req.query.id;
    // console.log(student_id)
    connection.query( 'Select *,auction_details.biduser from auction INNER JOIN auction_details ON auction.auction_id = auction_details.auction_id AND auction_details.student_id=? ORDER BY auction_details.biduser DESC;',
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

exports.past = (req,res) => {
    console.log("api")
    const auction_id =req.query.id;
    console.log(auction_id)
    connection.query( 'Select *,users.fname,users.lname,users.email from auction INNER JOIN users ON auction.bidder_id = users.id where auction.auction_id=?;',
    [auction_id],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }

    );
};

exports.pstbid = (req,res) => {
    console.log("api")
    const auction_id =req.query.id;
    console.log(auction_id)
    connection.query( 'Select *,users.fname,users.lname,users.email from auction INNER JOIN users ON auction.bidder_id = users.id where auction.auction_id=?;',
    [auction_id],
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

exports.update = (req,res) => {
    
    console.log("api")
    // const studentID =req.body.studentID;
    const bid = req.body.bid;
    const student_id=req.body.studentID;
    const auction_id =req.query.id;
    // const description = req.body.description;
    // const year = req.body.year;
    // // const subject = req.body.subject;
    // const Baseprice = req.body.Baseprice;
    // const date = req.body.date;
    // const type = 'note';
    console.log(bid,auction_id,student_id)
    connection.query( "update auction set bid1 = ?,bidder_id=? where auction_id = ? and bid1 < ?;",
    [bid,student_id,auction_id,bid],
    (err, result,fields) => {

        if (err) {
            res.send("Invalid");
        } 
        else{
            
            connection.query( "insert into auction_details (auction_id,student_id,biduser) values(?,?,?);",
            [auction_id,student_id,bid],
            (err1, results,fields) => {
                        if (err1) {
                            res.send(err1);
                        } else {
                            connection.query( "update auction set bid = ? where auction_id = ? ;",
                            [bid,auction_id],
                            (err2, results,fields) => {
                        if (err1) {
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
exports.updatestatus = (req,res) => {
    // const studentID =req.body.studentID;
    // const bid = req.body.bid;
    const auction_id =req.query.id;
    // const description = req.body.description;
    // const year = req.body.year;
    // // const subject = req.body.subject;
    // const Baseprice = req.body.Baseprice;
    // const date = req.body.date;
    // const type = 'note';
    
    connection.query( "update auction set status = 2 where auction_id = ?",
    [auction_id],
    (err, result,fields) => {

        if (err) {
            res.send("Invalid");
        } 
        else{
            
                            res.send("success");
                       
                }
                }
            );
};
exports.delpast = (req,res) => {
    // const studentID =req.body.studentID;
    // const bid = req.body.bid;
    const auction_id =req.query.id;
    // const description = req.body.description;
    // const year = req.body.year;
    // // const subject = req.body.subject;
    // const Baseprice = req.body.Baseprice;
    // const date = req.body.date;
    // const type = 'note';
    
    connection.query( "delete from auction where auction_id = ?",
    [auction_id],
    (err, result,fields) => {

        if (err) {
            res.send("Invalid");
        } 
        else{
            
                            res.send("success");
                       
                }
                }
            );
};

exports.bidpast = (req,res) => {
    const studentID =req.body.studentID;
    // const bid = req.body.bid;
    const auction_id =req.query.id;
    // const description = req.body.description;
    // const year = req.body.year;
    // // const subject = req.body.subject;
    // const Baseprice = req.body.Baseprice;
    // const date = req.body.date;
    // const type = 'note';
    
    connection.query( "delete from auction_details where auction_id = ? and student_id=?",
    [auction_id,studentID],
    (err, result,fields) => {

        if (err) {
            res.send("Invalid");
        } 
        else{
            
                            res.send("success");
                       
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



