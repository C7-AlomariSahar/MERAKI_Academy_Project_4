const mealModel = require("../models/mealsSchema");

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

  const resturantId = req.params.id;
  const { 
    resturantName,
    image, 
    restaurant_id,
    building,
    coord,
    street,
    zipcode,
    city,
    cuisine,
    rate,
  } = req.body;


  mealModel.findById({_id:resturantId}).then((data)=>{
 
 

    mealModel
      .findOneAndUpdate({ _id: resturantId },  {resturantName : resturantName|| data.resturantName ,
        image :  image ||  data.image, 
        restaurant_id :restaurant_id || data.restaurant_id,
       address:{ building :building  || data.address.building ,
        coord : coord|| data.address.coord ,
        street :street || data.address.street ,
        zipcode :zipcode || data.address.zipcode} ,
        city :city|| data.city,
        cuisine :cuisine || data.cuisine,
        rate :rate|| data.rate }, { new: true })
      .then((result) => {
        res.status(201).json({
          success: true,
          message: `resturant updated`,
          resturant: result,
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
          message: `this Resturant is not found`,
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
   
    mealModel.find({ resturantId: resturantId }).populate("mealType","meunTypeName -_id").populate("resturantId","resturantName -_id").exec()
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
           message: `No meals in  ${CuisineId} kitchen`,
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
  getAllMealsWithSameeMenueTypeforOneResturant,
};
