const express =require("express")

const mealRouter = express.Router();
const {
createNewMeal,
updateMeal,
getOneMealbyId,
getAllMeals,
getAllMealsForOneResturant,
getAllMealsWithSameeMenueTypeforOneResturant


} = require("../controllers/meal");


mealRouter.post("/", createNewMeal);
mealRouter.put("/update/:id", updateMeal);
mealRouter.get("/:id", getOneMealbyId);
mealRouter.get("/allmeals/meals", getAllMeals);
mealRouter.get("/ResturantbyCuisine/:cuisineType", getAllMealsForOneResturant);
mealRouter.get("/ResturantbyCuisine/:cuisineType", getAllMealsWithSameeMenueTypeforOneResturant);


module.exports = mealRouter ;