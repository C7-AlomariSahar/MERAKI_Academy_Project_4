const express =require("express")

const cuisineRouter =express.Router()

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const {createNewCuisine , getAllCuisine}= require("../controllers/cuisine")
cuisineRouter.post("/", authentication,
authorization("CREATE"),createNewCuisine)
cuisineRouter.get("/cuisines", getAllCuisine)
  
module.exports = cuisineRouter