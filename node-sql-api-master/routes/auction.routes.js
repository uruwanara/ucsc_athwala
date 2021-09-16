module.exports = donationRoutes => {
    const auction = require("../controllers/auction.controller");

    var router = require("express").Router();

    //retrieve all the details of donations
    // router.get("/viewall", donation.viewall);

    // //retrieve selected donation details
    // router.post("/view", donation.viewDetails);

    // ////retrieve selected donation title and description
    // router.post("/select", donation.getTitle);

    // //retrive all the my donation requests
    // router.get("/viewmyall", donation.viewMyall);

    //request note 
    router.post("/createauc",auction.noteRequest);

    //request cloth 
    // router.post("/clothrequest",donation.clothRequest);

    // //request device 
    // router.post("/devicerequest",donation.deviceRequest);

    // //request money
    // router.post("/moneyrequest",donation.moneyRequest);

    // //request other
    // router.post("/otherrequest",donation.otherRequest);



    donationRoutes.use('/api/auction', router);
};