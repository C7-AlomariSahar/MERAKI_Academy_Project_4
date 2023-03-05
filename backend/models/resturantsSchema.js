const mongoose =require ("mongoose")

const resturantSchema = new mongoose.Schema({

    
        resturantName: {type: String, required:true},
        restaurant_id:{type: String, required:true},
        address: {
          building: String,
          coord: [Number],
          street: String,
          zipcode: Number,
        },
        borough: {type: String, required:true},
        cuisine: {type: mongoose.Schema.Types.ObjectId ,ref :"cuisine", required:true},
        
        rate:Number ,
        // grades: [
        //   {
        //     date: {$date: Number},
        //     grade: String,
        //     score: Number,
    
        //   }
        // ]
    })
    

    
module.exports	= new mongoose.model("restaurant",resturantSchema)