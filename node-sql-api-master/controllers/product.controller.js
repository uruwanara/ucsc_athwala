const db = require("../models");
const connection = require("../dbConnection")

exports.viewAllProducts = (req, res,err) => {
    connection.query('Select * from product where is_pay = 0;',
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
}; 

exports.productDetails = (req,res,err) => {
    const product_id =req.body.product_id;

    connection.query( 'Select * from product where product_id = ?   ;',
    [product_id],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }

    );
};

exports.productDetailsMore = (req,res,err) => {
    const product_id =req.body.product_id;
    const p_type =req.body.p_type;

    connection.query( 'Select * from ?? where product_id = ? ;',
    [p_type,product_id],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }

    );
};

exports.viewMyallSellProduct = (req,res,err) => {
    const userId =req.query.id;
    //console.log(userId);
    connection.query( 'Select * from product where user_id = ? ;',
    [userId],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }

    );
};

exports.sellNote = (req,res) => {
    const userID =req.body.user_id;
    const title = req.body.title;
    const description = req.body.description;
    const year = req.body.year;
    const subject = req.body.subject;
    const lesson = req.body.lesson;
    //const post_date = req.body.date;
    const price = req.body.price;
    const image = req.body.image;
    const show_or_hide_details = req.body.show_or_hide_details;
    const p_type = 'note';
    
    connection.query( 'insert into product (product_type,price,description,title,show_or_hide_details,user_id) values(?,?,?,?,?,?);',
    [p_type,price,description,title,show_or_hide_details,userID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } 
        else{
            connection.query( 'SELECT product_id from product order by product_id DESC LIMIT 1; ',
                    (err1, results,fields) => {
                        if (err1) {
                            res.send(err1);
                        } else {
                            let product_id_max = results[0].product_id;
                            connection.query( 'insert into p_note (product_id,year,subject,lesson,image) values(?,?,?,?,?); ',
                                [product_id_max,year,subject,lesson,image],
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

exports.sellDevice = (req,res) => {
    const userID =req.body.user_id;
    const title = req.body.title;
    const description = req.body.description;
    const brand = req.body.brand;
    const model = req.body.model;
    const image = req.body.image;
    //const post_date = req.body.date;
    const price = req.body.price;
    const show_or_hide_details = req.body.show_or_hide_details;
    const p_type = 'device';
    
    connection.query( 'insert into product (product_type,price,description,title,show_or_hide_details,user_id) values(?,?,?,?,?,?);',
    [p_type,price,description,title,show_or_hide_details,userID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } 
        else{
            connection.query( 'SELECT product_id from product order by product_id DESC LIMIT 1; ',
                    (err1, results,fields) => {
                        if (err1) {
                            res.send(err1);
                        } else {
                            let product_id_max = results[0].product_id;
                            connection.query( 'insert into p_device (product_id,brand,image,model) values(?,?,?,?); ',
                                [product_id_max,brand,image,model],
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
exports.sellOther = (req,res) => {
    const userID =req.body.user_id;
    const title = req.body.title;
    const description = req.body.description;
    const information = req.body.information;
    //const post_date = req.body.date;
    const price = req.body.price;
    const image = req.body.image;
    const show_or_hide_details = req.body.show_or_hide_details;
    const p_type = 'other';
    
    connection.query( 'insert into product (product_type,price,description,title,show_or_hide_details,user_id) values(?,?,?,?,?,?);',
    [p_type,price,description,title, show_or_hide_details,userID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } 
        else{
            connection.query( 'SELECT product_id from product order by product_id DESC LIMIT 1; ',
                    (err1, results,fields) => {
                        if (err1) {
                            res.send(err1);
                        } else {
                            let product_id_max = results[0].product_id;
                            connection.query( 'insert into p_other (product_id,information_product,image) values(?,?,?); ',
                                [product_id_max,information,image],
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

exports.viewMyallBuyProduct = (req,res,err) => {
    const userId =req.query.id;
    console.log(userId);
    connection.query( 'Select * from pay_product where user_id = ? ;',
    [userId],
    (err1, result,fields) => {
        if (err1) {
            res.send(err1);
        } else {
            //res.send(result);
            //console.log(result);
            let product_id_buy = result[0].product_id;
            //console.log(product_id_buy);
            connection.query( 'Select * from product where product_id = ? ;',
            [product_id_buy],
            (err2, results,fields) => {
                 if (err2) {
                     res.send(err2);
                 } else {
                     res.send(results);
                }
            }
        
            );
        }
    }

    );
};


