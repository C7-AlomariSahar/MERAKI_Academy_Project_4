
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

const getAllMeunType=(req,res)=>{


  meunTypeModel.find({}).then((meunType) => {
   
    res.status(200).json({
      success: true,
      message: `All the meunType `,
      meunType: meunType,
    });
  })
  .catch((err) => {
    res.status(500).json({
      success: false,
      message: `Server Error`,
      err: err.message,
    });

  })

}


const getlimitedMeunType=(req,res)=>{
  const skipnumber =req.query.skipnumber
  const limitnumber =req.query.limitnumber
  
  
  meunTypeModel.find({}).skip(skipnumber).limit(limitnumber).then((meunType) => {
     
      res.status(200).json({
        success: true,
        message: `All the meunType `,
        meunType: meunType,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
  
    })
  
  }
module.exports = {createNewMeunType ,getlimitedMeunType ,getAllMeunType}