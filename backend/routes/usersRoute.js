const express= require("express")
const userRoute = express.Router();

const {createNewUser,updateNewUser,login}=require("../controllers/user")

userRoute.post("/register",createNewUser)
userRoute.put("/update/:id",updateNewUser)
userRoute.post("/login", login)

module.exports = userRoute;