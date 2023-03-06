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


module.exports = {
  createNewResturant,
  updateResturant,
//   getOneResturant,
//   getAllResturant,
//   getAllResturantByCuisineType,
};
