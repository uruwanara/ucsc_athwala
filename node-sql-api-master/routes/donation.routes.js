module.exports = donationRoutes => {
    const donation = require("../controllers/donation.controller");

    var router = require("express").Router();

    //retrieve all the details of donations
    router.get("/viewall", donation.viewall);

    //retrieve selected donation details
    router.post("/view", donation.viewDetails);

    ////retrieve selected donation title and description
    router.post("/select", donation.getTitle);

    //retrive all the my donation requests
    router.get("/viewmyall", donation.viewMyall);

    //request note 
    router.post("/noterequest",donation.noteRequest);

    //request cloth 
    router.post("/clothrequest",donation.clothRequest);

    //request device 
    router.post("/devicerequest",donation.deviceRequest);

    //request money
    router.post("/moneyrequest",donation.moneyRequest);

    //request other
    router.post("/otherrequest",donation.otherRequest);

    //search donations
    router.post("/search",donation.search);

    //send doner's contact details
    router.post("/contact",donation.contact);

    //get the doner's details
    router.post("/donerdetails",donation.donerdetails);

    //mark the donation status as received
    router.post("/markstatus",donation.markstatus);

    //get my donation history 
    router.get("/donationhistory",donation.myhistory);

    //edit note posts
    router.post("/noteedit",donation.noteEdit);

    //edit cloth posts
    router.post("/clothedit",donation.clothEdit);

    //edit device posts
    router.post("/deviceedit",donation.deviceEdit);

    //edit money posts
    router.post("/moneyedit",donation.moneyEdit);

    //edit other posts
    router.post("/otheredit",donation.otherEdit);

    //delete donation posts
    router.post("/delete",donation.delete);

    //filter posts
    router.get("/filter",donation.filter);

    //search my donations
    router.post("/mysearch",donation.mysearch);

    //filter my posts
    router.post("/myfilter",donation.myfilter)

    donationRoutes.use('/api/donations', router);
};