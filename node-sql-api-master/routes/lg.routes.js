module.exports = lgRoutes => {
    const lgs = require("../controllers/lg.controller");

    var router = require("express").Router();

    router.post("/create", lgs.create);

    // Retrieve a single user with username
    router.post("/findone", lgs.findOne);
//hdsdi
    router.post("/find", lgs.find);
    router.post("/acd", lgs.viewAll);
    // Update a user with username
    router.post("/update", lgs.update);

    router.post("/adduser", lgs.adduser);
    router.post("/rmuser", lgs.rmuser);
    // Delete a user with username
    router.post("/delete", lgs.delete);

    lgRoutes.use('/api/lgs', router);
};