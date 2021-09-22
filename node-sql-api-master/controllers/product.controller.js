const db = require("../models");
const connection = require("../dbConnection")

exports.viewAllProducts = (req, res,err) => {
    connection.query('Select * from product where is_pay = 0 AND active = 1 AND block = 0;',
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

    connection.query( 'Select * from product where product_id = ? AND active = 1 AND block = 0;',
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


exports.productMyDetails = (req,res,err) => {
    const product_id =req.body.product_id;

    connection.query( 'Select * from product where product_id = ? AND active = 1;',
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
            console.log(result);
            res.send(result);
        }
    }

    );
};

exports.viewMyallSellProduct = (req,res,err) => {
    const userId =req.query.id;
    //console.log(userId);
    connection.query( 'Select * from product where user_id = ? AND active = 1 ;',
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
                                        res.send({prdID:product_id_max});
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
    const userId =req.body.id;
    connection.query("select product.product_id , product.description , product.product_type , product.price , product.postdate, pay_product.pay_date FROM product INNER JOIN pay_product ON product.product_id = pay_product.product_id WHERE pay_product.user_id = ? AND product.is_history = 1 AND pay_product.is_history = 1",
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

exports.deleteProductHistory = (req, res) => {
    const product_id = req.body.product_id; 

    connection.query("update pay_product set is_history = 0 where product_id = ?",
    [product_id],
    (err, result,fields) => { 
        if (err) {
            res.send(err);
        } else {
            //res.send("success");
            
            //const product_id = req.body.product_id; 

            connection.query("update product set is_history = 0 where product_id = ?",
            [product_id],
            (err1, result,fields) => { 
                if (err1) {
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

exports.deleteProduct = (req, res) => {
    const product_id = req.body.product_id; 

    connection.query("update pay_product set active = 0 where product_id = ?",
    [product_id],
    (err, result,fields) => { 
        if (err) {
            res.send(err);
        } else {
            //res.send("success");
            
            //const product_id = req.body.product_id; 

            connection.query("update product set active = 0 where product_id = ?",
            [product_id],
            (err1, result,fields) => { 
                if (err1) {
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

exports.productDeviceEdit = (req,res) => {
    const product_id = req.body.product_id;
    const title = req.body.title;
    const description = req.body.description;
    const model = req.body.model;
    const brand = req.body.brand;
    const image = req.body.image;
    //const post_date = req.body.date;
    const price = req.body.price;
    const show_or_hide_details = req.body.show_or_hide_details;
    const p_type = req.body.type;
    
    connection.query( 'update product set product_type=?,price=?,description=?,title=?,show_or_hide_details=? where product_id=?;',
    [p_type,price,description,title,show_or_hide_details,product_id],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query( 'update p_device set brand=?,model=? where product_id=?;',
            [model,brand,product_id],
            (err, results,fields) => {
                if (err) {
                    res.send(err);
                } else {
                   res.send("success");
                }
            }
            );
        }
    }
    );
};


exports.productNoteEdit = (req,res) => {

    const product_id = req.body.product_id;
    const title = req.body.title;
    const description = req.body.description;
    const year = req.body.year;
    const subject = req.body.subject;
    const lesson = req.body.lesson;
    //const post_date = req.body.date;
    const price = req.body.price;
    const image = req.body.image;
    const show_or_hide_details = req.body.show_or_hide_details;
    const p_type = req.body.type;
    
    connection.query( 'update product set product_type=?,price=?,description=?,title=?,show_or_hide_details=? where product_id=?;',
    [p_type,price,description,title,show_or_hide_details,product_id],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query( 'update p_note set year=?,subject=?,lesson=? where product_id=?;',
            [year,subject,lesson,product_id],
            (err, results,fields) => {
                if (err) {
                    res.send(err);
                } else {
                   res.send("success");
                }
            }
            );
        }
    }
    );
};


exports.productOtherEdit = (req,res) => {

    const product_id = req.body.product_id;
    const title = req.body.title;
    const description = req.body.description;
    const information = req.body.information;
    //const post_date = req.body.date;
    const price = req.body.price;
    const image = req.body.image;
    const show_or_hide_details = req.body.show_or_hide_details;
    const p_type = req.body.type;
    

    connection.query( 'update product set product_type=?,price=?,description=?,title=?,show_or_hide_details=? where product_id=?;',
    [p_type,price,description,title,show_or_hide_details,product_id],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            connection.query( 'update p_other set information_product=? where product_id=?;',
            [information,product_id],
            (err, results,fields) => {
                if (err) {
                    res.send(err);
                } else {
                   res.send("success");
                }
            }
            );
        }
    }
    );
};

exports.blockProductPost = (req, res) => {
    const product_id = req.body.product_id; 

    

            connection.query("update product set block = 1 where product_id = ?",
            [product_id],
            (err1, result,fields) => { 
                if (err1) {
                    res.send(err1);
                } else {
                    res.send("success");
                }
            }
        );  

};

exports.haveBlockProductDetails = (req,res,err) => {
    const product_id =req.body.product_id;

    connection.query( 'Select * from product where product_id = ? AND active = 1;',
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

exports.viewAdminAllProducts = (req, res,err) => {
    connection.query('Select * from product where is_pay = 0 AND active = 1;',
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    }
);
}; 


exports.payProductPost = (req, res) => {
    const product_id = req.body.product_id; 
            connection.query("update product set is_pay = 1 where product_id = ?",
            [product_id],
            (err1, result,fields) => { 
                if (err1) {
                    res.send(err1);
                } else {
                    res.send("success");
                }
            }
        );  

};


exports.updateProductTable = (req,res) => {
    const userID =req.body.user_id;
    const product_id = req.body.product_id;
    
    connection.query( 'insert into pay_product (product_Id,user_id) values(?,?);',
    [product_id,userID],
    (err, result,fields) => {
        if (err) {
            res.send(err);
        } 
        else{
            res.send("success");
        }
    }
    );   
};


