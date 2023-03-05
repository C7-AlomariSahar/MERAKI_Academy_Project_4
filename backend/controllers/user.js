const userModel = require("../models/usersSchema");

const createNewUser = (req, res) => {
  const {   firstName,    LastName,    UserName,    email,    password,    phoneNumber,    city,    building,    street,    flatNumber,    role,
  } = req.body;

  const newUserInstanse = new userModel({
    firstName,    LastName,    UserName,    email,    password,    phoneNumber,
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
const userId =req.params.id
    const {   firstName,    LastName,    UserName,    email,    password,    phoneNumber,    city,    building,    street,    flatNumber,    role,
    } = req.body;
    userModel.findOneAndUpdate({_id:userId},{ firstName,    LastName,    UserName,    email,    password,    phoneNumber,    city,    building,    street,    flatNumber,    role,
    },{new:true}).then((result)=>{
        res.status(201).json({
            success: true,
            message: `user updated`,
            user: result,
        });
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: `Server Error`,
           Error:err
          });
    })



};

module.exports = { createNewUser, updateNewUser };

