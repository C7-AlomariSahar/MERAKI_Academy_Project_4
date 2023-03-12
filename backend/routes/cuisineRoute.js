const express =require("express")

const cuisineRouter =express.Router()

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const {createNewCuisine , getAllCuisine ,getlimitedCuisine}= require("../controllers/cuisine")
cuisineRouter.post("/", authentication,
authorization("CREATE"),createNewCuisine)
cuisineRouter.get("/cuisines", getlimitedCuisine)
cuisineRouter.get("/cuisines/all", getAllCuisine)
  
module.exports = cuisineRouter