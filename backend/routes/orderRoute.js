
const express=require("express")

const orderRouter =express.Router();


const{createNewOrder,updateOrder,getAllOrdersForOneUser}=require("../controllers/order")

orderRouter.post("/",createNewOrder)
orderRouter.put("/update/:id",updateOrder)
orderRouter.get("/allorders/:id",getAllOrdersForOneUser)

module.exports =orderRouter