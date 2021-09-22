module.exports = donationRoutes => {
    const auction = require("../controllers/auction.controller");

    var router = require("express").Router();

    //retrieve all the details of donations
      router.get("/details", auction.details);

      router.get("/mybid", auction.mybid);

      router.get("/bidvalue", auction.getbid);

      router.post("/updatestatus", auction.updatestatus);

    // //retrieve selected donation details
    // router.post("/view", donation.viewDetails);

    // ////retrieve selected donation title and description
    // router.post("/select", donation.getTitle);

    // retrive all the my donation requests
    router.get("/myauction", auction.viewMyall);

    router.get("/past", auction.past);

    router.get("/pstbid", auction.pstbid);

    router.get("/pastauction", auction.mypast);

    //request note 
    router.post("/createauc",auction.noteRequest);

    router.get("/viewall", auction.viewall);

    //request cloth 
     router.post("/update",auction.update);

     router.post("/deletehistory",auction.delpast);

     router.post("/bidhistory",auction.bidpast);

    // //request device 
    // router.post("/devicerequest",donation.deviceRequest);

    // //request money
    // router.post("/moneyrequest",donation.moneyRequest);

    // //request other
    // router.post("/otherrequest",donation.otherRequest);



    donationRoutes.use('/api/auction', router);
};