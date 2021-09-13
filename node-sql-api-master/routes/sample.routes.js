module.exports = sampleRoutes => {
    const sample = require("../controllers/sample.controller");

    var router = require("express").Router();
    router.get("/viewall", sample.viewall);
    router.post("/create", sample.create);

    // Retrieve a single user with username
    router.get("/:donationID", sample.findOne);

    

   

    // // Update a user with username
    // router.post("/update/:username", users.update);
    //
    // // Delete a user with username
  //  router.post("/delete/:username", users.delete);

    sampleRoutes.use('/api/samples', router);
};