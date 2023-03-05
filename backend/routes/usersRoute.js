const express= require("express")
const userRoute = express.Router();
const {createNewUser}=require("../controllers/user")
userRoute.post("/",createNewUser)

module.exports = userRoute;