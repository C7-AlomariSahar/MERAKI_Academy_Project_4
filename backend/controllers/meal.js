const mealModel = require("../models/mealsSchema");
const menutype =require("../models/menuTypeSchema")

const createNewMeal = (req, res) => {
  const {
   
    mealName ,
    image,
    description,
    price,
    ingrediantsToAdd,
    ingrediantsToRemove ,  
     mealType,
    resturantId } = req.body;

  const newMealInstance = new mealModel({
    mealName ,
    image,
    description,
    price,
    ingrediantsToAdd,
    ingrediantsToRemove ,  
     mealType,
    resturantId 
  });

 
  newMealInstance.save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `resturant created`,
        role: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err,
      });
    });
};

const updateMeal = (req, res) => {

  const mealId = req.params.id;
  const { 
    mealName ,
    image,
    description,
    price,
    ingrediantsToAdd,
    ingrediantsToRemove ,  
     mealType,
    resturantId
  } = req.body;


  mealModel.findById({_id:mealId}).then((data)=>{
 
    mealModel
      .findByIdAndUpdate ({ _id: mealId }, 
         {mealName : mealName|| data.mealName ,
        image :  image ||  data.image, 
        resturantId :resturantId || data.resturantId,
        description :description  || data.description ,
        price : price|| data.price ,
        ingrediantsToAdd :ingrediantsToAdd ,
        ingrediantsToRemove :ingrediantsToRemove ,
        mealType :mealType || data.mealType }, { new: true })
      .then((result) => {
        res.status(201).json({
          success: true,
          message: `meal updated`,
          meal: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          error: err,
        });
      });
    }).catch((err)=>{
      res.status(500).json({
          success: false,
          message: `this meal is not found`,
         Error:err
        });
  })
};

const getOneMealbyId =(req,res)=>{
  
    let mealId = req.params.id;
   
    mealModel.find({ _id: mealId }).populate("mealType","meunTypeName -_id").populate("resturantId","resturantName -_id").exec()
       .then((data) => {
         if (!data.length) {
           return res.status(404).json({
             success: false,
             message: `this meal not found`,
           });
         }
         res.status(200).json({
           success: true,
           message: `found`,
           meal: data,
         });
       })
       .catch((err) => {
         res.status(500).json({
           success: false,
           message: `Server Error`,
           err: err.message,
         });
       });
  
   

}
const getOneMealbymealType =(req,res)=>{
  
  let mealType = req.params.mealType;
 
  mealModel.find({ mealType: mealType }).populate("mealType","meunTypeName -_id").populate("resturantId","resturantName -_id").exec()
     .then((data) => {
       if (!data.length) {
         return res.status(404).json({
           success: false,
           message: `this meal not found`,
         });
       }
       res.status(200).json({
         success: true,
         message: `found`,
         meal: data,
       });
     })
     .catch((err) => {
       res.status(500).json({
         success: false,
         message: `Server Error`,
         err: err.message,
       });
     });

 

}


const  getAllMeals =( req,res)=>{

   
    mealModel.find().populate("mealType","meunTypeName -_id").populate("resturantId","resturantName -_id").exec()
       .then((data) => {
       
         res.status(200).json({
           success: true,
           message: `found`,
           Meals: data,
         });
       })
       .catch((err) => {
         res.status(500).json({
           success: false,
           message: `Server Error`,
           err: err.message,
         });
       });
  
   


}


const   getAllMealsForOneResturant = ( req,res)=>{


  
    let resturantId = req.params.resturantId;
   
    mealModel.find({ resturantId: resturantId }).populate("mealType","meunTypeName -_id").populate("resturantId","resturantName -_id").sort({mealType:1}).exec().then((data) => {
       
         res.status(200).json({
           success: true,
           message: `found`,
           meals: data,
         });
       })
       .catch((err) => {
         res.status(500).json({
           success: false,
           message: `No meals for this resturant`,
           err: err.message,
         });
       });
  
   



}
const   getAllmenuTypeMealsForOneResturant = ( req,res)=>{


  
  const skipnumber =req.query.skipnumber
  const limitnumber =req.query.limitnumber
 
  let resturantId = req.params.resturantId;
 
  mealModel.find({ resturantId: resturantId },{mealType:1}).distinct("mealType").exec().then((data) => {
    // .sort({mealType:1}).skip(skipnumber).limit(limitnumber)populate("mealType","meunTypeName")

    menutype.find({_id :{ $in: data }}).skip(skipnumber).limit(limitnumber).then((result)=>{
      res.status(200).json({
        success: true,
        message: `found`,
        menutype: result,
      });
      

    })
    
   
      
     })
     .catch((err) => {
       res.status(500).json({
         success: false,
         message: `No meals for this resturant`,
         err: err.message,
       });
     });

 



}
const   getAllMealsWithSameeMenueTypeforOneResturant = ( req,res)=>{

    
    let resturantId = req.params.resturantId;
    let mealType = req.params.mealType;
   
    mealModel.find({ mealType: mealType , resturantId: resturantId }).populate("mealType","meunTypeName -_id").populate("resturantId","resturantName -_id").exec()
       .then((data) => {
        
         res.status(200).json({
           success: true,
           message: `found`,
           meals: data,
         });
       })
       .catch((err) => {
         res.status(500).json({
           success: false,
           message: `No meals in  ${mealType} kitchen`,
           err: err.message,
         });
       });
  
   



}


const  getLikeMeal =( req,res)=>{
  const keysearchString =req.params.keysearch


  const keysearch = keysearchString.split(/\s+/);
 const keysearchr = keysearch.join("|");
 
     mealModel.find({mealName:{ $regex: `${keysearchr}`, $options:'i' }}).populate("mealType","meunTypeName -_id").populate("resturantId","resturantName").exec()
       .then((data) => {
        console.log("Keyyyyyyydata",data)
         res.status(200).json({
           success: true,
           message: `found`,
           meal: data,
         });
       })
       .catch((err) => {
         res.status(500).json({
           success: false,
           message: `Server Error`,
           err: err.message,
         });
       });
  
   
  
  
  }
  const getTop5meals =(req,res)=>{
  

 
    mealModel.find({}).sort({price:-1}).populate("mealType","meunTypeName -_id").populate("resturantId","resturantName").limit(4).exec()
       .then((data) => {
         if (!data.length) {
           return res.status(404).json({
             success: false,
             message: `this meal not found`,
           });
         }
         res.status(200).json({
           success: true,
           message: `found`,
           meals: data,
         });
       })
       .catch((err) => {
         res.status(500).json({
           success: false,
           message: `Server Error`,
           err: err.message,
         });
       });
  
   
  
  }
module.exports = {
  createNewMeal,
  updateMeal,
  getOneMealbyId,
  getAllMeals,
  getAllMealsForOneResturant,
  getAllMealsWithSameeMenueTypeforOneResturant,getAllmenuTypeMealsForOneResturant
  ,getOneMealbymealType,getLikeMeal,
  getTop5meals
};
