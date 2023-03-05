const mongoose =require ("mongoose")

const cuisineSchema =new mongoose.Schema({



    cuisineName :{ type :String ,required: true },

})

module.exports = new mongoose.model("cuisine",cuisineSchema)