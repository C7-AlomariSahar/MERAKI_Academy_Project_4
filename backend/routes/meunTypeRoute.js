

const express =require("express")

const meunTypeRouter =express.Router()

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const {createNewMeunType}= require("../controllers/meunType")
meunTypeRouter.post("/",authentication,
authorization("CREATE"),createNewMeunType)

module.exports = meunTypeRouter