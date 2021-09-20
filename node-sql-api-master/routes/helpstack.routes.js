module.exports = helpStackRoutes => {
    const helpstack = require("../controllers/helpstack.controller");

    var router = require("express").Router();

    //ask question
    router.post("/askquestion", helpstack.askQuestion);

    //answer question
    router.post("/answerquestion", helpstack.answerQuestion);

    //view all questions
    router.get("/viewallquestion", helpstack.viewallQuestion);

    //view selected question
    router.get("/viewquestion", helpstack.viewQuestion);

    //view answers of selected question
    router.get("/viewanswer", helpstack.viewAnswer);

    //search questions
    router.post("/search", helpstack.search);


    helpStackRoutes.use('/api/helpstacks', router);
};