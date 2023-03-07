const express =require("express")

const roleRouter = express.Router();

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const {createNewRole ,updateNewRole} =require ("../controllers/role")

roleRouter.post("/",authentication,
authorization("CREATE"),createNewRole)
roleRouter.put("/update/:id",updateNewRole)
module.exports = roleRouter ;

