module.exports = adminRoutes => {
    const ars = require("../controllers/admin.controller");

    var router = require("express").Router();

    router.post("/viewunion", ars.viewunion);
    router.post("/viewcoun", ars.viewcoun);
    router.post("/viewstd", ars.viewstd);
    router.post("/viewpstd", ars.viewpstd);

    router.post("/union/active/:id", ars.activeunion);
    router.post("/union/deactive/:id", ars.deactiveunion);
    router.post("/coun/active/:id", ars.activecoun);
    router.post("/coun/deactive/:id", ars.deactivecoun);
    router.post("/std/active/:id", ars.activestd);
    router.post("/std/deactive/:id", ars.deactivestd);
    router.post("/pstd/active/:id", ars.activepstd);
    router.post("/pstd/deactive/:id", ars.deactivepstd);
    router.post("/active/:id", ars.activeuser);
    router.post("/deactive/:id", ars.deactiveuser);

    router.post("/unionadd/:id", ars.unionadd);
    router.post("/unionremove/:id", ars.unionremove);


    router.post("/usersearch", ars.usersearch);
    router.post("/userfilter", ars.userfilter);

    router.post("/listadd", ars.listadd);
    router.post("/admin/changeemail",ars.changeemail);

    adminRoutes.use('/api/ars', router);
};