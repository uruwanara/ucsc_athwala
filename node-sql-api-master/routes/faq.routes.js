module.exports = faqRoutes => {
    const faq = require("../controllers/faq.controller");

    var router = require("express").Router();

    //retrieve all the details of question and answer
    router.get("/viewallquestion",faq.viewAllQuestion);

    //create the details of question and answer
    router.post("/createQA",faq.createQA );

    //  //retrieve selected product details more
    //  router.post("/viewdetailmore", product.productDetailsMore);

    //  //retrive all the my Sell product
    // router.get("/viewmyallSellProduct",product.viewMyallSellProduct);



  
   faqRoutes.use('/api/faqs', router);
};