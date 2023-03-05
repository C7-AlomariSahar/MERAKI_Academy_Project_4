const roleModel = require("../models/roleSchema");

const createNewRole = (req, res) => {
  const { roleName, permissions } = req.body;

  const newRoleInstance = new roleModel({ roleName, permissions });

  newRoleInstance
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Role created`,
        role: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error:err
      });
    });
};

const updateNewRole =(req,res)=>{
    console.log("$$$$$$$$$$$$$$ updateNewRole $$$$$$$$$$$$$$$$$$")
  const roleId = req.params.id
    const {permissions}=req.body
    if(permissions){
    roleModel.findOneAndUpdate({_id:roleId},{permissions},{new:true}).then((result)=>{
        res.status(201).json({
            success: true,
            message: `Role updated`,
            role: result,
        });
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: `Server Error`,
            error:err
          });
    })
    }else{
        res.json("now updates found")
    }

}

module.exports = {
  createNewRole,
  updateNewRole,
};

