module.exports = donationRoutes => {
    const donation = require("../controllers/donation.controller");

    var router = require("express").Router();

    router.post("/create", donation.create);

    // Retrieve a single user with username
     router.get("/:donationID", donation.findOne);

    // // Update a user with username
    // router.post("/update/:username", users.update);
    //
    // // Delete a user with username
  //  router.post("/delete/:username", users.delete);

    donationRoutes.use('/api/donations', router);
};