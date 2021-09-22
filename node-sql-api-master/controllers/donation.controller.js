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
exports.pay = (req,res) => {
    const dId=req.body.dId;
    const totalamount=req.body.amount;
    const donerid = req.body.donerid;

    connection.query( 'SELECT amount,current_amount from money where donation_id=?;',
    [dId],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            }
            else{
                console.log(result);
                let goalamount = result[0].amount;
                let curramount = result[0].current_amount;

                console.log(goalamount);
                console.log(curramount);

                if(goalamount === totalamount){
                    connection.query( 'UPDATE donations set status=2 where donationID=?;',
                    [dId],
                        (err, result,fields) => {
                            if (err) {
                                res.send(err);
                            }
                        }
                    );
                    connection.query( "UPDATE money set status='Received' where donation_id=?;",
                    [dId],
                        (err, result,fields) => {
                            if (err) {
                                res.send(err);
                            }
                        }
                    );

                }

                connection.query( "UPDATE money set current_amount=? where donation_id=?;",
                    [totalamount,dId],
                        (err, result,fields) => {
                            if (err) {
                                res.send(err);
                            }
                        }
                );

                let donateamount = totalamount - curramount;
                console.log(donateamount);
                connection.query( 'INSERT INTO doners(donation_id,doner_id,amount) VALUES (?,?,?)',
                    [dId,donerid,donateamount],
                    (err, result,fields) => {
                        if (err) {
                            res.send(err);
                        }
                        else{
                            res.send("success");
                        }
                    }
                );
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

connection.query("select donations.donationID , donations.donationType , donations.description , donations.createdAt , donations.status, doners.id, doners.donate_at FROM donations INNER JOIN doners ON donations.donationID = doners.donation_id WHERE doners.doner_id = ? and doners.history = 1;",
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

exports.noteEdit = (req,res) => {
    const title = req.body.title;
    const description = req.body.description;
    const year = req.body.year;
    const subject = req.body.subject;
    const lesson = req.body.lesson;
    const date = req.body.date;
    const type = 'note';
    const donationid = req.body.donationid;
    
    connection.query( 'update donations set donationType=?,title=?,description=? where donationID=?',
    [type,title,description,donationid],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } 
        else{
            connection.query( 'update note set year=?,subject=?,lesson=?,before_date=? where donation_id=?; ',
            [year,subject,lesson,date,donationid],
                    (err1, results,fields) => {
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
};

exports.clothEdit = (req,res) => {
    const donationid = req.body.donationid;
    const title = req.body.title;
    const description = req.body.description;
    const clothType = req.body.clothType;
    const gender = req.body.gender;
    const size = req.body.size;
    const date = req.body.date;
    const type = 'cloth';
    
    connection.query( 'update donations set donationType=?,title=?,description=? where donationID=?;',
    [type,title,description,donationid],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query( 'update cloth set gender=?,size=?,before_date=?,cloth_type=? where donation_id=?; ',
            [gender,size,date,clothType,donationid],
            (err, results,fields) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send('success');
                }
            }
            );
        }
    }
    );
};

exports.deviceEdit = (req,res) => {
    const donationid = req.body.donationid;
    const title = req.body.title;
    const description = req.body.description;
    const model = req.body.model;
    const brand = req.body.brand;
    const date = req.body.date;
    const type = 'device';
    
    connection.query( 'update donations set donationType=?,title=?,description=? where donationID=?;',
    [type,title,description,donationid],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query( 'update device set model=?,brand=?,before_date=? where donation_id=?;',
            [model,brand,date,donationid],
            (err, results,fields) => {
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
};

exports.moneyEdit = (req,res) => {
    const donationid = req.body.donationid;
    const title = req.body.title;
    const description = req.body.description;
    const note = req.body.note;
    const date = req.body.date;
    const type = 'money';
    
    connection.query( 'update donations set donationType=?,title=?,description=? where donationID=?;',
    [type,title,description,donationid],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query( 'update money set note=?,before_date=? where donation_id=?;',
            [note,date,donationid],
            (err, results,fields) => {
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
};

exports.otherEdit = (req,res) => {
    const donationid = req.body.donationid;
    const title = req.body.title;
    const description = req.body.description;
    const reason = req.body.reason;
    const date = req.body.date;
    const type = 'other';
    
    connection.query( 'update donations set donationType=?,title=?,description=? where donationID=?;',
    [type,title,description,donationid],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query( 'update other set reason=?,before_date=? where donation_id=?;',
            [reason,date,donationid],
            (err, results,fields) => {
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
};


exports.delete = (req, res) => {
    const donationID = req.body.donationID; 

    connection.query("update donations set active = 0 where donationID = ?",
    [donationID],
    (err, result,fields) => { 
        if (err) {
            res.send(err);
        } else {
            res.send("success");
        }
    }
);
};

exports.filter = (req,res) => {
    const type = req.query.type; 

    if(type=='all'){
        connection.query("Select * from donations where active = 1 and status = 0;",
            (err, result,fields) => { 
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            }
        );
    }
    else{
        connection.query("Select * from donations where active = 1 and status = 0 and donationType = ?;",
            [type],
            (err, result,fields) => { 
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            }
        );
    }

    
}

exports.mysearch = (req, res) => {
    const message = req.body.search; 
    const userid = req.body.userid;

    connection.query("Select * from donations where (title "+ "like'%"+ message+"%'"+" or description "+"like'%"+ message+"%')" + " AND student_id = ?;",
    [userid],
    (err, result,fields) => { 
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
};

exports.myfilter = (req,res) => {
    const type = req.body.type; 
    const id = req.body.id;

    if(type=='all'){
        connection.query("select * from donations where student_id = ?",
        [id],
            (err, result,fields) => { 
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            }
        );
    }
    else{
        connection.query("select * from donations where donationType = ? and student_id = ?;",
            [type,id],
            (err, result,fields) => { 
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            }
        );
    }

    
}

exports.studentDetails = (req, res) => {
    const studentid = req.body.student; 


    connection.query("select * from users where id=? ",
    [studentid],
    (err, result,fields) => { 
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
};

exports.uploadfile = (req, res) => {
    const donationid = req.body.donationID;
    const type = req.body.type;
    const doner = req.body.donerid;

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
                    connection.query("insert into doners(donation_id,doner_id) values (?,?)",
                    [donationid,doner],
                        (err2, result,fields) => { 
                            if (err2) {
                                res.send(err1);
                            } else {
                                res.send('success');
                            }
                        }
                    );
                }
            }
        );
    }
}
);

}

exports.publicall = (req, res) => {
  
    connection.query("select * from donations where active = 1 and status = 0 and donationType = 'money' ;",
    (err, result,fields) => { 
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
};

exports.deleteHistory = (req, res) => {
    const donertblid = req.body.donertblid;

connection.query("UPDATE doners set history = 0 where id=?",
[donertblid],
(err, result,fields) => { 
    if (err) {
        res.send(err);
    } else {
        res.send("success");
    }
}
);

}






