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
            res.send("success");
        }
    }
);
};

exports.answerQuestion = (req, res) => {
    const studentID =req.body.userid;
    const answer = req.body.answer;
    const questionID = req.body.questionid;

    connection.query('insert into answers_helpstack(answer,answer_by,q_id) values(?,?,?)',
    [answer,studentID,questionID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query('UPDATE question_helpstack SET ansCount = ansCount+1 where q_id = ?',
            [questionID],
                (err1, result,fields) => {
                    if (err) {
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



exports.viewallQuestion = (req, res) => {

    connection.query('select * from question_helpstack ORDER BY q_id DESC',
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
    connection.query('SELECT answers_helpstack.ans_id, answers_helpstack.answer, answers_helpstack.q_id , users.fname , users.lname FROM answers_helpstack INNER JOIN users ON answers_helpstack.answer_by = users.id WHERE answers_helpstack.q_id = ? ORDER BY answers_helpstack.ans_id ASC',
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

exports.search = (req, res) => {
    const message = req.body.search;

    if(message == ""){
        connection.query('select * from question_helpstack;',
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
       
    connection.query("Select * from question_helpstack where (title "+ "like'%"+ message+"%'"+" or question "+"like'%"+ message+"%');",
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

exports.filterquestion = (req, res) => {

    const filter = req.body.filter;
    const id = req.body.id;

    if(filter == 'all'){
        connection.query('select * from question_helpstack ORDER BY q_id DESC',
            (err, result,fields) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            }
        );
    }
    else if(filter == 'my'){
        connection.query('select * from question_helpstack where ask_by = ? ORDER BY q_id DESC',
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
    
};
