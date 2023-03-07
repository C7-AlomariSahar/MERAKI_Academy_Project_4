const userModel = require("../models/usersSchema");
const role = require("../models/roleSchema");
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");
const createNewUser = (req, res) => {
  const {
    firstName,
    LastName,
    UserName,
    email,
    password,
    phoneNumber,
    city,
    building,
    street,
    flatNumber,
    role,
  } = req.body;

  const newUserInstanse = new userModel({
    firstName,
    LastName,
    UserName,
    email,
    password,
    phoneNumber,
    address: { city, building, street, flatNumber },
    role,
  });

  newUserInstanse
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `User created`,
        user: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        seccess: false,
        message: "Server Error",
        errer: err,
      });
    });
};

const updateNewUser = (req, res) => {
  const userId = req.params.id;
  const {
    firstName,
    LastName,
    UserName,
    email,
    password,
    phoneNumber,
    city,
    building,
    street,
    flatNumber,
    role,
  } = req.body;


userModel.findById({_id:userId}).then((data)=>{
 
  let newcity;
   city ?  newcity= city : newcity= data.address.city
    
    const newbuilding = building||data.address.building
    const newstreet  = street||data.address.street
    const newflatNumber = flatNumber||data.address.flatNumber
    
   


  userModel
    .findOneAndUpdate({ _id: userId },  { firstName:firstName||data.firstName ,    LastName:LastName||data.LastName ,    UserName:UserName||data.UserName ,  email:  email||data.email,    password :password|| data.password ,  phoneNumber : phoneNumber||data.phoneNumber,   address:{city:newcity,building:newbuilding,street:newstreet,flatNumber:newflatNumber} ,    role:role||data.role,
    }, { new: true })
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `user updated`,
        user: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        Error: err.message,
      });
    });

  }).catch((err)=>{
      res.status(500).json({
          success: false,
          message: `this user is not found`,
         Error:err
        });
  })
};

const login =(req,res)=>{
 
  const password = req.body.password;
  const email = req.body.email.toLowerCase();

  userModel
    .find({ email: email })
    .then((data) => {
      console.log("dataa", data);
      if (data.length > 0) {
        bcrypt.compare(password, data[0].password, (err, result) => {
          if (err) {
            throw err;
          }
          if  (result) {
            // token
            role.find({_id:data[0].role}).then((roleInfo)=>{
              console.log("roleeeeeeeeeee",roleInfo)
              const payload = { userId: data[0]._id
                 ,role: {
                role:roleInfo[0].role,
                permissions: roleInfo[0].permissions
              } };
              const options = { expiresIn: "600m"};
             const token = jwt.sign(payload, process.env.SECRET,options)
  
              res
                .status(200)
                .json({
                  success: true,
                  message: "Valid login credentials",
                  token: token,
                });
             }).catch((err)=>{
              throw err
             })
         
      
          } else {
            res
              .status(401)
              .json({
                success: false,
                message:
                  "The email doesn’t exist or the password you’ve entered is incorrect",
              });
          }
        });
      } else {
        res
          .status(401)
          .json({
            success: false,
            message:
              "The email doesn’t exist or the password you’ve entered is incorrect",
          });
      }
    })
    .catch((err) => {
      throw err;
    });

}

module.exports = { createNewUser, updateNewUser ,login};

/**
 * 
 *   const filter = req.body;
  Object.keys(filter).forEach((key) => {
    filter[key] == "" && delete filter[key];
    if (key == "address" && filter[key] != "") {
      Object.keys(filter[key]).forEach((key2) => {
        if (filter.address[key2] == "") {
          delete filter.address[key2];
        }
      });
    }
  });
 { $set: filter }
    filter.address = { $set: { ...filter.address } };
  console.log("______________________",filter)
 */


