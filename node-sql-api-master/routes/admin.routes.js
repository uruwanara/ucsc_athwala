module.exports = adminRoutes => {
    const ars = require("../controllers/admin.controller");

    var router = require("express").Router();

    router.post("/viewUnion", ars.viewunion);
    router.post("/", ars.viewunion);
    router.post("/viewUnion", ars.viewunion);
    router.post("/viewUnion", ars.viewunion);
    router.post("/viewUnion", ars.viewunion);
    router.post("/viewUnion", ars.viewunion);
    router.post("/viewUnion", ars.viewunion);
    router.post("/viewUnion", ars.viewunion);

    lgRoutes.use('/api/ars', router);
};