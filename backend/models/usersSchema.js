const mongoose =require("mongoose")

const userSchema =new mongoose.Schema ({

    firstName:{type:String ,required:true},
    LastName:{type:String ,required:true},
    UserName:{type:String ,required:true},
    email :{type:String , required:true,unique:true},
    password :{type:String , required:true },
    phoneNumber:{type:Number ,required:true},
    address: {
        city:String,
        building: String,
        street: String,
        flatNumber: Number,
       // coord: [Number],
      },
    // country:{type:String,required:true },
    role :{type:mongoose.Schema.Types.ObjectId ,ref:"role", required:true },

})

module.exports = new mongoose.model("user",userSchema)


