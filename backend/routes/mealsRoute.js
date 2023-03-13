const express =require("express")

const mealRouter = express.Router();
const {
createNewMeal,
updateMeal,
getOneMealbyId,
getAllMeals,
getAllMealsForOneResturant,
getAllMealsWithSameeMenueTypeforOneResturant ,getAllmenuTypeMealsForOneResturant
,getOneMealbymealType

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
mealRouter.get("/Resturant/:resturantId/menu/:mealType", getAllMealsWithSameeMenueTypeforOneResturant);

mealRouter.get("/Resturant/:resturantId/allMenuType", getAllmenuTypeMealsForOneResturant);

module.exports = mealRouter ;