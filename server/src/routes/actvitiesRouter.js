const {Router} = require("express");
const { 
    getActivitiesHandler,
    postActivitiesHandler}= require("../handlers/activitiesHandlers")

const actiRouter = Router();

actiRouter.get("/", getActivitiesHandler)
actiRouter.post("/", postActivitiesHandler);


module.exports= actiRouter;
