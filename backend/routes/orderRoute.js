
const express=require("express")

const orderRouter =express.Router();


const{createNewOrder,updateOrder,getAllOrdersForOneUser ,getAllOrders}=require("../controllers/order")

orderRouter.post("/",createNewOrder)
orderRouter.put("/update/:id",updateOrder)
orderRouter.get("/allorders/:id",getAllOrdersForOneUser)
orderRouter.get("/allorders",getAllOrders)

module.exports =orderRouter