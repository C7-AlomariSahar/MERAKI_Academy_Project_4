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

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
//authentication,
//authorization("CREATE"),
mealRouter.post("/", createNewMeal);
mealRouter.put("/update/:id", updateMeal);
mealRouter.get("/:id", getOneMealbyId);
mealRouter.get("/allmeals/meals", getAllMeals);
mealRouter.get("/Resturant/:resturantId", getAllMealsForOneResturant);
mealRouter.get("/Resturant/:resturantId/menu/:mealType", getAllMealsWithSameeMenueTypeforOneResturant);


module.exports = mealRouter ;