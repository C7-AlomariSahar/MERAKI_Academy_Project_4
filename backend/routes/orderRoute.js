
const express=require("express")

const orderRouter =express.Router();


const{createNewOrder,updateOrder}=require("../controllers/order")

orderRouter.post("/",createNewOrder)
orderRouter.put("/update/:id",updateOrder)


module.exports =orderRouter