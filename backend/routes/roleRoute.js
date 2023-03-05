const express =require("express")

const roleRouter = express.Router();

const {createNewRole } =require ("../controllers/role")

roleRouter.post("/",createNewRole)
// roleRouter.put("/update/:id",updateNewRole)updateNewRole
module.exports = roleRouter ;

