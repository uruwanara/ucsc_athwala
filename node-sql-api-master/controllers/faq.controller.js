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