module.exports = helpStackRoutes => {
    const donation = require("../controllers/helpstack.controller");

    var router = require("express").Router();

    //ask question
    router.post("/askquestion", donation.askQuestion);

    //answer question
    router.post("/answerquestion", donation.answerQuestion);

    //view all questions
    router.get("/viewallquestion", donation.viewallQuestion);

    //view selected question
    router.get("/viewquestion", donation.viewQuestion);

    //view answers of selected question
    router.get("/viewanswer", donation.viewAnswer);

    helpStackRoutes.use('/api/helpstacks', router);
};