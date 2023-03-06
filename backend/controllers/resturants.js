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

// const updateResturant = (req, res) => {
//   console.log("$$$$$$$$$$$$$$ updateNewRole $$$$$$$$$$$$$$$$$$");
//   const roleId = req.params.id;
//   const { permissions } = req.body;
//   if (permissions) {
//     roleModel
//       .findOneAndUpdate({ _id: roleId }, { permissions }, { new: true })
//       .then((result) => {
//         res.status(201).json({
//           success: true,
//           message: `Role updated`,
//           role: result,
//         });
//       })
//       .catch((err) => {
//         res.status(500).json({
//           success: false,
//           message: `Server Error`,
//           error: err,
//         });
//       });
//   } else {
//     res.json("now updates found");
//   }
// };

module.exports = {
  createNewResturant,
//   updateResturant,
//   getOneResturant,
//   getAllResturant,
//   getAllResturantByCuisineType,
};
