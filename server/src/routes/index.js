const { Router } = require("express");
const actiRouter = require("./actvitiesRouter")
const countriesRouter= require("./countriesRouter")

const router = Router();

router.use("/countries", countriesRouter)
router.use("/activities", actiRouter )

module.exports = router;
