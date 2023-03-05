const mongoose =require ("mongoose")

const menuTypeSchema = new mongoose.Schema({

    
    foodTypeName: {type: String, required:true},
   

    })
    

    
module.exports	= new mongoose.model("menuType",menuTypeSchema)