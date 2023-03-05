const express =require("express")

const roleRouter = express.Router();

const {createNewRole ,updateNewRole} =require ("../controllers/role")

roleRouter.post("/",createNewRole)
roleRouter.put("/update/:id",updateNewRole)
module.exports = roleRouter ;

