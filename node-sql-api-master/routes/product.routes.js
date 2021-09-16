module.exports = productRoutes => {
    const product = require("../controllers/product.controller");

    var router = require("express").Router();

    router.get("/viewall",product.viewAllProducts);


  
   productRoutes.use('/api/products', router);
};