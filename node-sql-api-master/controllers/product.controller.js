const db = require("../models");
const connection = require("../dbConnection")

//Create A Producrt
exports.create = (req, res,err) => {
    console.log(req.body)

    const productID = req.body.productID;
    const productName = req.body.productName;
    const productType = req.body.productType;

    connection.query('INSERT INTO product (productId,productName,productType) VALUES (?,?,?)',
        [productID,productName,productType],
        (err,result) => {
            if (err) {
                console.log(err);
            } else {
                res.json("success")
            }
        }
    );

};


