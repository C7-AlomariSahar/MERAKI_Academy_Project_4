const userModel = require("../models/usersSchema");

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
    role
  } = req.body;

  const newUserInstanse = new userModel({
    firstName,
    LastName,
    UserName,
    email,
    password,
    phoneNumber,
    address:{city,
    building,
    street,
    flatNumber},
    role

  });

  newUserInstanse
    .save()
    .then((result)=>{
        res.status(201).json({
            success: true,
            message: `User created`,
            role: result,    })
    })
    .catch((err) => {
      res.status(500).json({
        seccess: false,
        message: "Server Error",
        errer:err
      });
    });
};

const updateNewUser = (req, res) => {};

module.exports = { createNewUser, updateNewUser };

// firstName,
// LastName,
// UserName,
// email ,
// password ,
// phoneNumber,
// address {
//     city,
//     building,
//     street,
//     flatNumber,

//   },

// role ,
