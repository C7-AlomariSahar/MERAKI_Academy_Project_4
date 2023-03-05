const express= require("express")
const userRoute = express.Router();

const {createNewUser,updateNewUser}=require("../controllers/user")

userRoute.post("/",createNewUser)
userRoute.put("/update/:id",updateNewUser)

module.exports = userRoute;