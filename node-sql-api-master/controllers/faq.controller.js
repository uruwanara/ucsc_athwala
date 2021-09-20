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