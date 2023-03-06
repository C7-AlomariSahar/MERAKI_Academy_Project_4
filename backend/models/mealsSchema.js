const mongoose =require ("mongoose")

const mealSchema =new mongoose.Schema({



    mealName :{ type :String ,required: true },
    image:{type: String, required:true}, 
    description:{ type :String ,required: true },
    price:{type :Number ,required:true},
   ingrediantsToAdd:[{type :String,defult:[]}],
    ingrediantsToRemove :[{type :String ,defult:[]}],  
     mealType:{type: mongoose.Schema.Types.ObjectId ,ref :"menuType" ,required:true},
    resturantId :{type: mongoose.Schema.Types.ObjectId ,ref :"restaurant" ,required:true}

})

module.exports = new mongoose.model("meal",mealSchema)