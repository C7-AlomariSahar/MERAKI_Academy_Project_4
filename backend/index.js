const express = require("express");
const cors = require("cors");

require("dotenv").config();

require("./models/db")
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

 

const userRouter = require("./routes/usersRoute")
const roleRouter = require("./routes/roleRoute")
const mealRouter = require("./routes/mealsRoute")
const resturantsRouter = require("./routes/resturantsRoute")
const cuisineRouter =require("./routes/cuisineRoute")
const meunTypeRouter =require("./routes/meunTypeRoute")
const orderRouter=require("./routes/orderRoute")

app.use("/user",userRouter)
app.use("/role",roleRouter)
app.use("/meal",mealRouter)
app.use("/restaurant",resturantsRouter)
app.use("/cuisine",cuisineRouter)
app.use("/menuType",meunTypeRouter)
app.use("/order",orderRouter)



// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
