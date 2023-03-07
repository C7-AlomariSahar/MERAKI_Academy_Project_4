const express= require("express")
const userRoute = express.Router();


const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const {createNewUser,updateNewUser,login}=require("../controllers/user")

userRoute.post("/register",authentication,
authorization("CREATE_USERS"),createNewUser)
userRoute.put("/update/:id",updateNewUser)
userRoute.post("/login", login)

module.exports = userRoute;