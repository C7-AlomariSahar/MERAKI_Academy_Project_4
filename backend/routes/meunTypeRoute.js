

const express =require("express")

const meunTypeRouter =express.Router()

const {createNewMeunType}= require("../controllers/meunType")
meunTypeRouter.post("/",createNewMeunType)

module.exports = meunTypeRouter