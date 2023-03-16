const express = require("express");

const mealRouter = express.Router();
const {
  createNewMeal,
  updateMeal,
  getOneMealbyId,
  getAllMeals,
  getAllMealsForOneResturant,
  getAllMealsWithSameeMenueTypeforOneResturant,
  getAllmenuTypeMealsForOneResturant,
  getOneMealbymealType,
  getLikeMeal,
  getTop5meals,
} = require("../controllers/meal");

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
//authentication,
//authorization("CREATE"),
mealRouter.post("/", createNewMeal);
mealRouter.put("/update/:id", updateMeal);
mealRouter.get("/:id", getOneMealbyId);
mealRouter.get("/mealType/:mealType", getOneMealbymealType);

mealRouter.get("/allmeals/meals", getAllMeals);
mealRouter.get("/Resturant/:resturantId", getAllMealsForOneResturant);
mealRouter.get(
  "/Resturant/:resturantId/menu/:mealType",
  getAllMealsWithSameeMenueTypeforOneResturant
);

mealRouter.get(
  "/Resturant/:resturantId/allMenuType",
  getAllmenuTypeMealsForOneResturant
);

mealRouter.get("/search/:keysearch", getLikeMeal);

mealRouter.get("/topRated/top", getTop5meals);
module.exports = mealRouter;
