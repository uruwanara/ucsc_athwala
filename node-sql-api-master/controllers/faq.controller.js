const db = require("../models");
const connection = require("../dbConnection")

exports.viewAllQuestion = (req, res,err) => {
    connection.query('Select * from q_and_a ;',
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
}; 


exports.createQA = (req,res) => {
    console.log("hhhhhhhhh");
    const question =req.body.question;
    const answer = req.body.answer;
    const tag = req.body.tag;

    connection.query( 'insert into q_and_a (answer,questions,tag) values(?,?,?);',
    [answer,question,tag],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send("success");
        }
    }
    );
};

exports.faqsearch = (req, res) => {
    const message = req.body.search; 
    // connection.query("Select * from donations where (title "+ "like'%"+ message+"%'"+" or description "+"like'%"+ message+"%')" + " AND active = 1 and status = 0;",
    connection.query("Select * from q_and_a where (answer "+ "like'%"+ message+"%'"+" or questions "+"like'%"+ message+"%'"+" or tag "+"like'%"+ message+"%');",
    (err, result,fields) => { 
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
}