const {Router}= require("express");
const {
    getCountriesByNameHandler, 
    getCountriesIdHandler,
    getAllCountries}= require("../handlers/countriesHandlers");

const countriesRouter= Router();


countriesRouter.get("/", getCountriesByNameHandler)
countriesRouter.get("/:id", getCountriesIdHandler)



module.exports= countriesRouter;