module.exports = productRoutes => {
    const product = require("../controllers/product.controller");

    var router = require("express").Router();

    //retrieve all the details of products
    router.get("/viewall",product.viewAllProducts);

    //retrieve selected product details
    router.post("/viewdetail", product.productDetails);

     //retrieve selected product details more
     router.post("/viewdetailmore", product.productDetailsMore);

     //retrive all the my Sell product
    router.post("/viewmyallSellProduct",product.viewMyallSellProduct);

     //Sell note 
     router.post("/sellNote",product.sellNote);

      //Sell note 
      router.post("/sellDevice",product.sellDevice);

       //Sell note 
     router.post("/sellOther",product.sellOther);

     //retrive all the my Buy product
     router.get("/viewmyallBuyProduct",product.viewMyallBuyProduct);


  
   productRoutes.use('/api/products', router);
};