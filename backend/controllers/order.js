
const orderModel =require("../models/ordersSchema")


 const createNewOrder =(req,res)=>{
    const {userId,totalPrice,deleviredTo,paymentMethod,orderfrom ,       
        orderItems,orderStatus}=req.body
  const orderModelInstance = new orderModel({
            userId,totalPrice,deleviredTo,paymentMethod, orderfrom  ,     
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

const getAllOrders=(req,res)=>{

    orderModel.find({}).populate("deleviredTo","resturantName -_id").exec()
    .then((orders) => {
     
      res.status(200).json({
        success: true,
        message: `All the orders `,
        orders: orders,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });


}

const getAllOrdersForOneUser=(req,res)=>{
 let userId = req.params.id;

 orderModel.find({ userId: userId }).populate("deleviredTo","resturantName -_id").exec()
    .then((orders) => {
      if (!orders.length) {
        return res.status(404).json({
          success: false,
          message: `The user: ${userId} has no orders`,
        });
      }
      res.status(200).json({
        success: true,
        message: `All the orders for the user: ${userId}`,
        orders: orders,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
}

 module.exports ={createNewOrder ,updateOrder ,getAllOrders,getAllOrdersForOneUser}




//  orderItems:	
// [{ itemName :{type :String ,required: true }
//     ,quntiti: {type :Number ,required: true }
//     ,price:{type :Number ,required: true}}],
