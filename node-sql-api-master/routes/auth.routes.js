module.exports = authRoutes => {
    const auth = require("../controllers/auth.controller");

    var router = require("express").Router();

    router.post("/", auth.login);
    router.get("/validate/:token", auth.validate);
    
    authRoutes.use('/api/login', router);
};