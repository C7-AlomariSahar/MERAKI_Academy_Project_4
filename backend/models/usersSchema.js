const mongoose =require("mongoose")
const bcrypt=require("bcrypt")
const userSchema =new mongoose.Schema ({

    firstName:{type:String ,required:true},
    LastName:{type:String ,required:true},
    UserName:{type:String ,required:true},
    email :{type:String , required:true,unique:true ,minlength: 10  ,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'] },
    password :{type:String , required:true ,minlength: 8},
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

userSchema.pre("save", async function () {
    this.email = this.email.toLowerCase();
    this.password = await bcrypt.hash(this.password,5);
  });

module.exports = new mongoose.model("user",userSchema)


