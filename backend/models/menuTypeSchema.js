const mongoose =require ("mongoose")

const menuTypeSchema = new mongoose.Schema({

    
    meunTypeName: {type: String, required:true},
   

    })
    

    
module.exports	= new mongoose.model("menuType",menuTypeSchema)