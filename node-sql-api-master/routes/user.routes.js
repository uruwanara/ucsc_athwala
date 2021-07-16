module.exports = userRoutes => {
    const users = require("../controllers/user.controller");

    var router = require("express").Router();

    router.post("/create", users.create);

    // Retrieve a single user with username
    router.get("/:username", users.findOne);

    // Update a user with username
    router.post("/update/:username", users.update);

    // Delete a user with username
    router.post("/delete/:username", users.delete);

    userRoutes.use('/api/users', router);
};