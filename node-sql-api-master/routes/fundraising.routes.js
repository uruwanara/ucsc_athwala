module.exports = fundraisingRoutes => {

    //require the fundraising controller file
    const fundraising = require('../controllers/fundraising.controller');

    //create an instance called router of express.Router(Router-level middleware)
    //Routes deteremines how an application responds to a client request to a particular endpoint
    var router = require("express").Router();

    //creat a fundraisng
    router.post("/create", fundraising.create);

    //retrieve all available fundraising
    router.get("/viewall", fundraising.viewall);

    //retrieve all expired fundraising
    router.get("/viewallex", fundraising.viewallex);

    //retrieve all expired fundraising
    router.get("/viewallend", fundraising.viewallend);

     //Edit available fundraising
     router.post("/editfund", fundraising.editfund);

       //Edit available fundraising
       router.post("/endbyforce", fundraising.endbyforce);


    //retrieve specific details from a fundraising
    router.post("/getfund", fundraising.viewbyid);

    //delete a specific fundraising by it's id
    router.delete("/deletefund/:fundID", fundraising.deletebyid);

    //A middleware function mounted on the '/api/fundraising' path, the function is executed for any type of HTTP request on the '/api/fundraising' path to the fundraising.route file receive a request.
    fundraisingRoutes.use('/api/fundraising', router);



}