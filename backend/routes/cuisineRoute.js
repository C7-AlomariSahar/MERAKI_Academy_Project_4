const express =require("express")

const cuisineRouter =express.Router()

const {createNewCuisine}= require("../controllers/cuisine")
cuisineRouter.post("/",createNewCuisine)

module.exports = cuisineRouter