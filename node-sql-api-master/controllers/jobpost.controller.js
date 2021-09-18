const db = require("../models");
const connection = require("../dbConnection")

exports.createPost = (req, res) => {
    const pstudentID = req.body.pstudentID;
    const title = req.body.title;
    const description = req.body.description;
    const company = req.body.company;
    const requirement1 = req.body.requirement1;
    const requirement2 = req.body.requirement2;
    const requirement3 = req.body.requirement3;
    const requirement4 = req.body.requirement4;
    const other = req.body.other;
    const phone = req.body.phone;
    const email = req.body.email;
    const web = req.body.web;
    const linkdin = req.body.linkdin;

    connection.query('insert into job_vacancy (title,description,company,req1,req2,	req3,req4,reqOther,	tel,mail,website,linkdin,posted_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [title,description,company,requirement1,requirement2,requirement3,requirement4,other,phone,email,web,linkdin,pstudentID],
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

    connection.query('select jobpost_id,title,description,company,post_at from job_vacancy where deleted = 0',
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
};

exports.viewPost = (req, res) => {
    const postid = req.body.postid;

    connection.query('select * from job_vacancy where deleted = 0 and jobpost_id=?',
    [postid],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
};

exports.viewMypost = (req, res) => {
    const pstid = req.query.id;

    connection.query('select * from job_vacancy where deleted = 0 and posted_by=?',
    [pstid],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
};


exports.updatePost = (req, res) => {
    const postID = req.body.postID;
    const title = req.body.title;
    const description = req.body.description;
    const company = req.body.company;
    const requirement1 = req.body.requirement1;
    const requirement2 = req.body.requirement2;
    const requirement3 = req.body.requirement3;
    const requirement4 = req.body.requirement4;
    const other = req.body.other;
    const phone = req.body.phone;
    const email = req.body.email;
    const web = req.body.web;
    const linkdin = req.body.linkdin;

    connection.query('update job_vacancy set title = ? ,description = ?,company = ?,req1 = ?,req2 = ?,req3 = ? ,req4= ? ,reqOther = ?,tel = ? ,mail = ? ,website = ?,linkdin = ? where jobpost_id=? ',
    [title,description,company,requirement1,requirement2,requirement3,requirement4,other,phone,email,web,linkdin,postID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send("success");
        }
    }
);
};

exports.deletePost = (req, res) => {
    const postID = req.body.postID;

    connection.query('update job_vacancy set deleted = 1 where jobpost_id=? ',
    [postID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send("success");
        }
    }
);
};