module.exports = faqRoutes => {
    const faq = require("../controllers/faq.controller");

    var router = require("express").Router();

    //retrieve all the details of question and answer
    router.get("/viewallquestion",faq.viewAllQuestion);

    // //retrieve selected product details
    // router.post("/viewdetail", product.productDetails);

    //  //retrieve selected product details more
    //  router.post("/viewdetailmore", product.productDetailsMore);

    //  //retrive all the my Sell product
    // router.get("/viewmyallSellProduct",product.viewMyallSellProduct);



  
   faqRoutes.use('/api/faqs', router);
};