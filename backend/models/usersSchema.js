const mongoose =require("mongoose")

const userSchema =new mongoose.Schema ({

    firstName:{type:String ,required:true},
    LastName:{type:String ,required:true},
    UserName:{type:String ,required:true},
    email :{type:String , required:true,unique:true},
    password :{type:String , required:true },
    phoneNumber:{type:Number ,required:true},
    address: {
        city: {type:String,required:true},
        building:  {type:String,required:true},
        street:  {type:String,required:true},
        flatNumber:  {type:Number,required:true},
       // coord: [Number],
      },
    // country:{type:String,required:true },
    role :{type:mongoose.Schema.Types.ObjectId ,ref:"role", required:true },

})

module.exports = new mongoose.model("user",userSchema)


