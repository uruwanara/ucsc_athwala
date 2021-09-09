module.exports = productRoutes => {
    const product = require("../controllers/product.controller");

    var router = require("express").Router();

    router.post("/create", product.create);
    //
    // router.get("/:productID", product.findOne);
    //
    // router.get("/balanna", product.balanna);
    //
    // router.delete("/:productID", product.deleteOne);


    productRoutes.use('/api/products', router);
};