const mongoose =require ("mongoose")

const resturantSchema = new mongoose.Schema({

    
        resturantName: {type: String, required:true},
        image:{type: String, required:true}, 
        restaurant_id:{type: String, required:true},
        address: {
          building: {type: String, required:true},
          coord: [ {type: Number, required:true},],
          street: {type: String, required:true},
          zipcode: {type: Number, required:true}
        },
        city: {type: String, required:true},
        cuisine: {type: mongoose.Schema.Types.ObjectId ,ref :"cuisine", required:true},
        
        rate:Number ,
      
    })
    

    
module.exports	= new mongoose.model("restaurant",resturantSchema)