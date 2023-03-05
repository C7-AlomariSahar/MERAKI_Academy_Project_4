
const express=require("express")

const orderRouter =express.Router();


const{createNewOrder}=require("../controllers/order")

orderRouter.post("/",createNewOrder)


module.exports =orderRouter