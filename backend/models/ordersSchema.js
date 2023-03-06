const mongoose =require ("mongoose")

const orderSchema =new mongoose.Schema({

    userId :{type:mongoose.Schema.Types.ObjectId ,ref:"user"},
    totalPrice:{type :Number ,required:true},
    date	:{type:Date ,required:true ,default: Date.now},
    deleviredTo:{type :String ,required: true},
    paymentMethod:{type :String ,required: true},
    orderItems:	[{ itemName :{type :String ,required: true }
        ,quntiti: {type :Number ,required: true }
        ,price:{type :Number ,required: true}}],

    orderStatus:	{ type :String ,required: true },
  

})

module.exports = new mongoose.model("order",orderSchema)