const db = require("../models");
const connection = require("../dbConnection")

exports.viewAllProducts = (req, res) => {
    connection.query('Select * from product;',
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
}; 