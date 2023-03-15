const express = require("express");

const resturantsRouter = express.Router();

const {
  createNewResturant,
  updateResturant,
  getOneResturant,
  getAllResturant,
  getAllResturantByCuisineType,
  getAllResturantforFillData ,
  getTop5,
  getLikeRestaurant
} = require("../controllers/resturants");

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

resturantsRouter.post("/", authentication,
authorization("CREATE"),createNewResturant);
resturantsRouter.put("/update/:id", updateResturant);
resturantsRouter.get("/:id", getOneResturant);
resturantsRouter.get("/allResturant/Resturants", getAllResturant);
resturantsRouter.get("/ResturantbyCuisine/:cuisineType", getAllResturantByCuisineType);
resturantsRouter.get("/data/filldata", getAllResturantforFillData);
resturantsRouter.get("/topRated/top", getTop5);

resturantsRouter.get("/search/:keysearch", getLikeRestaurant);

module.exports = resturantsRouter;
