const express =require("express")

const resturantsRouter = express.Router();

const {createNewResturant }=require("../controllers/resturants")
// updateResturant ,getOneResturant ,getAllResturant
// ,getAllResturantByCuisineType

resturantsRouter.post("/",createNewResturant)
// resturantsRouter.put("/update/:id",updateResturant)
// resturantsRouter.get("/:id",getOneResturant)
// resturantsRouter.get("/allResturant",getAllResturant)
// resturantsRouter.get("/allResturant/:cuisineType",getAllResturantByCuisineType)


module.exports = resturantsRouter ;






 