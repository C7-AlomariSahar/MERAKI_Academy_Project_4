const cuisineModel =require("../models/cuisineSchema")


const createNewCuisine=(req,res)=>{
 
    const {cuisineName}=req.body
    const newcuisineInstance =new cuisineModel({cuisineName})
    newcuisineInstance.save().then((result) => {
        res.status(201).json({
          success: true,
          message: `cuisine created`,
          cuisine: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          error:err
        });
      });
}

module.exports = {createNewCuisine}