module.exports = counRoutes => {
    const couns = require("../controllers/coun.controller");

    var router = require("express").Router();


    router.post("/findall", couns.viewAll);

    router.post("/find", couns.find);


    counRoutes.use('/api/couns', router);
};