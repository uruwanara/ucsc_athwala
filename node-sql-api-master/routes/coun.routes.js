module.exports = counRoutes => {
    const couns = require("../controllers/coun.controller");

    var router = require("express").Router();


    router.post("/findall", couns.viewAll);


    counRoutes.use('/api/couns', router);
};