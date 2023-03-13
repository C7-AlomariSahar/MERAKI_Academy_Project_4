

const express =require("express")

const meunTypeRouter =express.Router()

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const {createNewMeunType ,getlimitedMeunType ,getAllMeunType}= require("../controllers/meunType")



meunTypeRouter.post("/",authentication,
authorization("CREATE"),createNewMeunType)
meunTypeRouter.get("/MeunType", getlimitedMeunType)
meunTypeRouter.get("/MeunType/all", getAllMeunType)

module.exports = meunTypeRouter