
const meunTypeModel =require("../models/menuTypeSchema")


const createNewMeunType=(req,res)=>{
 
    const {meunTypeName}=req.body
    const meunTypeModelInstance =new meunTypeModel({meunTypeName})
    meunTypeModelInstance.save().then((result) => {
        res.status(201).json({
          success: true,
          message: `meunType created`,
          meunType: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          error:err
        });
      });
}

module.exports = {createNewMeunType}