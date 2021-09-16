const db = require("../models");
const connection = require("../dbConnection")

exports.askQuestion = (req, res) => {
    const studentID =req.body.studentID;
    const title = req.body.title;
    const question = req.body.question;

    connection.query('insert into question_helpstack(title,question,ask_by) values(?,?,?)',
    [title,question,studentID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(scusses);
        }
    }
);
};

exports.answerQuestion = (req, res) => {
    const studentID =req.body.studentID;
    const answer = req.body.answer;
    const questionID = req.body.questionID;

    connection.query('insert into answers_helpstack(answer,answer_by,q_id) values(?,?)',
    [answer,studentID,questionID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query('UPDATE question_helpstack SET ansCount = ansCount+1;',
                (err1, result,fields) => {
                    if (err) {
                        res.send(err1);
                    } else {
                        
                        res.send(scusses);
                    }
                }
            );
        }
    }
);
}; 



exports.viewallQuestion = (req, res) => {

    connection.query('select * from question_helpstack',
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
};

exports.viewQuestion = (req, res) => {
    const questionID = req.query.questionid;

    connection.query('select * from question_helpstack where q_id = ?',
    [questionID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
};

exports.viewAnswer = (req, res) => {
    const questionID = req.query.questionid;

    //check the query 
    connection.query('select * from answers_helpstack where q_id = ?',
    [questionID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
};