
const orderModel =require("../models/ordersSchema")


 const createNewOrder =(req,res)=>{
    const {userId,totalPrice,date,deleviredTo,paymentMethod,        
        orderItems,orderStatus}=req.body
  const orderModelInstance = new orderModel({
            userId,totalPrice,date,deleviredTo,paymentMethod,        
            orderItems,orderStatus
        })

        orderModelInstance.save().then(
            (result) => {
                res.status(201).json({
                  success: true,
                  message: `order created`,
                  order: result,
                });
              }

        ).catch((err) => {
            res.status(500).json({
              success: false,
              message: `Server Error`,
              error:err
            });
          })

 }

 module.exports ={createNewOrder}




//  orderItems:	
// [{ itemName :{type :String ,required: true }
//     ,quntiti: {type :Number ,required: true }
//     ,price:{type :Number ,required: true}}],
