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

const getAllCuisine=(req,res)=>{


  cuisineModel.find({}).then((cuisine) => {
   
    res.status(200).json({
      success: true,
      message: `All the cuisines `,
      cuisine: cuisine,
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: err.message,
    });

  })

}


const getlimitedCuisine=(req,res)=>{
  const skipnumber =req.query.skipnumber
  const limitnumber =req.query.limitnumber
  
  
    cuisineModel.find({}).skip(skipnumber).limit(limitnumber).then((cuisine) => {
     
      res.status(200).json({
        success: true,
        message: `All the cuisines `,
        cuisine: cuisine,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
  
    })
  
  }
module.exports = {createNewCuisine , getAllCuisine ,getlimitedCuisine}