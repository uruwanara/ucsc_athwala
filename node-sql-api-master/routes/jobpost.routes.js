module.exports = jobpostRoutes => {
    const jobpost = require("../controllers/jobpost.controller");

    var router = require("express").Router();

    //create job post
    router.post("/create", jobpost.createPost);

    //get all job posts
    router.get("/viewall", jobpost.viewAll);

    //get selelcted post details
    router.post("/viewpost", jobpost.viewPost);

    //get my job posts
    router.get("/viewmypost",jobpost.viewMypost);

    //update job post
    router.post("/update", jobpost.updatePost);

    //delete job post
    router.post("/delete", jobpost.deletePost);

    jobpostRoutes.use('/api/jobposts', router);
};