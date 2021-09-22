const db = require("../models");
const connection = require("../dbConnection")


// in donation table if active column = 1 then donation is active. if active column = 0 then donation is not active.
// in donation table if status = 0 then donation is Not Received
// in donation table if status = 1 then donation is Pending
// in donation table if status = 2 then donation is Received


exports.viewunion=(req, res, err) => {
    console.log(req.body)
    const userType="UNIONST";
    connection.query('SELECT id,fname,lname,email,contactnumber,isActive,status,userType FROM users where userType=? ',
        [userType],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};

exports.viewcoun=(req, res, err) => {
    console.log(req.body)
    const userType="COUNSELLOR";
    connection.query('SELECT id,fname,lname,email,contactnumber,isActive,status,userType FROM users where userType=? ',
        [userType],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};


exports.viewstd=(req, res, err) => {
    console.log(req.body)
    const userType="STUDENT";
    connection.query('SELECT id,fname,lname,email,contactnumber,isActive,status,userType FROM users where userType=? ',
        [userType],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};
exports.viewpstd=(req, res, err) => {
    console.log(req.body)
    const userType="ALUMNI";
    connection.query('SELECT id,fname,lname,email,contactnumber,isActive,status,userType FROM users where userType=? ',
        [userType],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};

exports.activeuser=(req, res, err) => {
    console.log(req.body)
    const id = req.params.id;
    const stats="active"
    connection.query('UPDATE users SET status=? WHERE id=? ',
        [stats,id,],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};
exports.deactiveuser=(req, res, err) => {
    console.log(req.body)
    const id = req.params.id;
    const stats="deactive"
    connection.query('UPDATE users SET status=? WHERE id=? ',
        [stats,id,],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};








exports.activeunion=(req, res, err) => {
    console.log(req.body)
    const id = req.params.id;
    const stats="active"
    connection.query('UPDATE users SET status=? WHERE id=? ',
        [stats,id,],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};
exports.deactiveunion=(req, res, err) => {
    console.log(req.body)
    const id = req.params.id;
    const stats="deactive"
    connection.query('UPDATE users SET status=? WHERE id=? ',
        [stats,id,],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};
exports.activecoun=(req, res, err) => {
    console.log(req.body)
    const id = req.params.id;
    const stats="active"
    connection.query('UPDATE users SET status=? WHERE id=? ',
        [stats,id,],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};
exports.deactivecoun=(req, res, err) => {
    console.log(req.body)
    const id = req.params.id;
    const stats="deactive"
    connection.query('UPDATE users SET status=? WHERE id=? ',
        [stats,id,],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};
exports.activestd=(req, res, err) => {
    console.log(req.body)
    const id = req.params.id;
    const stats="active"
    connection.query('UPDATE users SET status=? WHERE id=? ',
        [stats,id,],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};
exports.deactivestd=(req, res, err) => {
    console.log(req.body)
    const id = req.params.id;
    const stats="deactive"
    connection.query('UPDATE users SET status=? WHERE id=? ',
        [stats,id,],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};
exports.activepstd=(req, res, err) => {
    console.log(req.body)
    const id = req.params.id;
    const stats="active"
    connection.query('UPDATE users SET status=? WHERE id=? ',
        [stats,id,],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};
exports.deactivepstd=(req, res, err) => {
    console.log(req.body)
    const id = req.params.id;
    const stats="deactive"
    connection.query('UPDATE users SET status=? WHERE id=? ',
        [stats,id,],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result)
            }
        }
    );
};

exports.listadd = (req, res) => {
    for(let i=0;i<req.body.length;i++){
        const email =req.body[i].email;
        console.log(email);
        connection.query("UPDATE users SET alumnistatus=1 where email=?",
            [email],
            (err, result,fields) => {
                if (err) {
                    res.send(err);
                } else {
                    console.log(" ------------------------");
                }
            }
        );

    }




};

exports.changeemail = (req, res) => {
    const email = req.body.email;
    const newEmail= req.body.newEmail;
    const userType="ALUMNI";

    connection.query("UPDATE users SET email=?, userType=?,alumnistatus=0 where email=?",
        [newEmail,userType,email],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
};




exports.usersearch = (req, res) => {
    const message = req.body.search;
    const utype= req.body.utype;
    connection.query("Select id,fname,lname,email,contactnumber,isActive,status,userType FROM users where (id "+"like'%"+ message+"%'"+" or fname "+"like'%"+ message+"%'"+" or lname "+"like'%"+ message+"%'"+" or email "+"like'%"+ message+"%'"+" or contactnumber "+"like'%"+ message+"%') AND userType=?;",
        [utype],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
};

exports.userfilter= (req, res) => {
    const message = req.body.status;
    const utype=req.body.utype;
    if(message=="all"){
        connection.query("Select id,fname,lname,email,contactnumber,isActive,status,userType FROM users where userType=?;",
            [utype],
            (err, result,fields) => {
                if (err) {
                    res.send(err);
                } else {
                    console.log("Sucsess")
                    res.send(result);
                }
            }
        );
    }else {
        connection.query("Select id,fname,lname,email,contactnumber,isActive,status,userType FROM users where status=? AND userType=?;",
            [message,utype],
            (err, result,fields) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            }
        );
    }

};


exports.unionadd= (req, res) => {
    const utype="UNIONST"
    const id = req.params.id;
    connection.query("UPDATE users SET userType=? where id=? ",
        [utype,id],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
};


exports.unionremove= (req, res) => {
    const utype="STUDENT"
    const id = req.params.id;
    connection.query("UPDATE users SET userType=? where id=? ",
        [utype,id],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
};







//---------------------------------------













exports.create= (req, res) => {
    const created_by = req.body.created_by;
    const title = req.body.title;
    const url = req.body.url;

    connection.query('INSERT INTO learning_groups (created_by,title,url,status) VALUES (?,?,?,1) ',
        [created_by, title, url],
        (err, result, fields) => {
            if (err) {
                res.send(err);
            } else {
                connection.query('SELECT lgId from learning_groups order by lgId DESC LIMIT 1; ',
                    (err1, results, fields) => {
                        if (err1) {
                            res.send(err1);
                        } else {
                            let lgIdMax = results[0].lgId;
                            connection.query('insert into lg_users (lgId,uId) values(?,?); ',
                                [lgIdMax, created_by],
                                (err2, result, fields) => {
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







    exports.delete = (req, res) => {
    const lgId = req.body.insertId;

    connection.query("update learning_groups set status = 0 where lgId = ?",
        [lgId],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send("success");
            }
        }
    );
};
exports.findOne = (req, res) => {
    const lgId = req.body.lgId

    connection.query("Select * from learning_groups where lgId= ?;",
        [lgId],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
};

exports.find = (req, res) => {
    const title = req.body.title;

    connection.query("Select * from learning_groups where (title "+ "like'%"+ title+"%')" + " AND status = 1;",
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
};


exports.update = (req, res) => {
    const lgId = req.body.lgId;
    const title = req.body.title;

    connection.query("update learning_groups set title = ? where lgId = ?",
        [title,lgId],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send("success");
            }
        }
    );
};


exports.adduser= (req, res) => {
    const lgId = req.body.lgId;
    const uId= req.body.uId;

    connection.query("INSERT INTO learning_groups (igId,uId) VALUES (?,?)",
        [lgId,uId],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send("success");
            }
        }
    );
};

exports.rmuser= (req, res) => {
    const lgId = req.body.lgId;
    const uId= req.body.uId;

    connection.query("DELETE FROM learning_groups WHERE lgId=?",
        [lgId],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send("success");
            }
        }
    );
};

exports.viewAll = (req, res) => {

    const uId = req.body.uId;
    console.log(uId);
    connection.query("Select learning_groups.lgId,learning_groups.title,learning_groups.url from learning_groups inner join lg_users on lg_users.lgId=learning_groups.lgId where lg_users.uId=?;",
        [uId],
        (err, result,fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
};
//-------------------------------------


exports.viewDetails = (req,res) => {
    const title=req.body.title;

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

{/*exports.mysearch = (req, res) => {
    const message = req.body.search;
    const userid = req.body.userid;

    connection.query("Select * from donations where (title "+ "like'%"+ message+"%'"+" or description "+"like'%"+ message+"%')" + " AND active = 1 and status = 0 where student_id = ?;",
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
    const type = req.query.type;
    const id = req.query.id;

    if(type=='all'){
        connection.query("'Select * from donations where student_id = ?",
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
        connection.query("'Select * from donations where donationType = ? and student_id = ?",
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


}*/}





