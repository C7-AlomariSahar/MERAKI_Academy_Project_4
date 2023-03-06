const express = require("express");

const resturantsRouter = express.Router();

const {
  createNewResturant,
  updateResturant,
  getOneResturant,
  getAllResturant,
  getAllResturantByCuisineType,
} = require("../controllers/resturants");


resturantsRouter.post("/", createNewResturant);
resturantsRouter.put("/update/:id", updateResturant);
resturantsRouter.get("/:id", getOneResturant);
resturantsRouter.get("/allResturant/Resturants", getAllResturant);
resturantsRouter.get("/ResturantbyCuisine/:cuisineType", getAllResturantByCuisineType);

module.exports = resturantsRouter;
