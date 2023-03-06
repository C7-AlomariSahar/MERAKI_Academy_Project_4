const resturantModel = require("../models/resturantsSchema");

const createNewResturant = (req, res) => {
  const {
    resturantName,
    image, 
    restaurant_id,
   address,
    city,
    cuisine,
    rate,
  } = req.body;

  const newresturantModelInstance = new resturantModel({
    resturantName,
    image, 
    restaurant_id,
    address,
    city,
    cuisine,
    rate,
  });

 
  newresturantModelInstance.save()
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

const updateResturant = (req, res) => {

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


  resturantModel.findById({_id:resturantId}).then((data)=>{
 
 

  resturantModel
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

const getOneResturant =(req,res)=>{
  
    let ResturantId = req.params.id;
   
    resturantModel.find({ _id: ResturantId }).populate("cuisine","cuisineName -_id").exec()
       .then((data) => {
         if (!data.length) {
           return res.status(404).json({
             success: false,
             message: `this Resturant: ${ResturantId} not found`,
           });
         }
         res.status(200).json({
           success: true,
           message: `found`,
           resturant: data,
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


const  getAllResturant =( req,res)=>{

   
    resturantModel.find().populate("cuisine","cuisineName -_id").exec()
       .then((data) => {
       
         res.status(200).json({
           success: true,
           message: `found`,
           resturant: data,
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


const getAllResturantByCuisineType=( req,res)=>{


  
    let CuisineId = req.params.cuisineType;
   
    resturantModel.find({ cuisine: CuisineId }).populate("cuisine","cuisineName -_id").exec()
       .then((data) => {
         if (!data.length) {
           return res.status(404).json({
             success: false,
             message: `No Resturant in  ${CuisineId} kitchen`,
           });
         }
         res.status(200).json({
           success: true,
           message: `found`,
           resturant: data,
         });
       })
       .catch((err) => {
         res.status(500).json({
           success: false,
           message: `No Resturant in  ${CuisineId} kitchen`,
           err: err.message,
         });
       });
  
   



}

module.exports = {
  createNewResturant,
  updateResturant,
  getOneResturant,
  getAllResturant,
 getAllResturantByCuisineType,
};
