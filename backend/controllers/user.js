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
    const {   firstName ,    LastName,    UserName,    email,    password,    phoneNumber,    city,    building,    street,    flatNumber,    role,
    } = req.body;

    userModel.findById({_id:userId}).then((data)=>{




        userModel.findOneAndUpdate({_id:userId},{ firstName:firstName||data.firstName ,    LastName:LastName||data.LastName ,    UserName:UserName||data.UserName ,  email:  email||data.email,    password :password|| data.password ,    phoneNumber : phoneNumber||data.phoneNumber,    city:city||data.city,    building :building||data.building,    street:street||data.street,    flatNumber:flatNumber||data.flatNumber,    role:role||data.role,
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
    

    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: `Server Error`,
           Error:err
          });
    })

  


};

module.exports = { createNewUser, updateNewUser };


/**
 * 
 * const filter = req.body;
Object.keys(filter).forEach((key) => {
  filter[key] == "" && delete filter[key];
//   if(key == "address" &&  filter[key] != "" ){
//     Object.keys(filter[key]).forEach((key2) => {
//         filter.address[key2] == "" && delete  filter.address[key2];
//   })}
 */