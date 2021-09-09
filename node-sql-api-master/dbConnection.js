const mysql = require('mysql2');
const dbconfig = require("./config/db.config");

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB,
});

connection.connect(function (err) {
    if (err) { throw err }
    else {
        console.log("Successfully connected to the database.");
    }
});

module.exports = connection;
