
const orderModel =require("../models/ordersSchema")


 const createNewOrder =(req,res)=>{
    const {userId,totalPrice,deleviredTo,paymentMethod,        
        orderItems,orderStatus}=req.body
  const orderModelInstance = new orderModel({
            userId,totalPrice,deleviredTo,paymentMethod,        
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

 const updateOrder =(req,res)=>{
const orderId =req.params.id ;
    const {totalPrice,
        orderItems,
        orderStatus}=req.body
 
        orderModel.findById({_id:orderId}).then((data)=>{

            orderModel.findOneAndUpdate({_id:orderId},{ totalPrice:totalPrice||data.totalPrice ,    orderItems:orderItems||data.orderItems ,    orderStatus:orderStatus||data.orderStatus 
            },{new:true}).then((result)=>{
                res.status(201).json({
                    success: true,
                    message: `Order updated`,
                    user: result,
                });
            }).catch((err)=>{
                res.status(500).json({
                    success: false,
                    message: `Server Error`,
                   Error:err
                  });
            })
        
    
        }).catch((err)=>{
            res.status(500).json({
                success: false,
                message: `Server Error`,
               Error:err
              });
        })
    
      
    

 }

 module.exports ={createNewOrder ,updateOrder}




//  orderItems:	
// [{ itemName :{type :String ,required: true }
//     ,quntiti: {type :Number ,required: true }
//     ,price:{type :Number ,required: true}}],
