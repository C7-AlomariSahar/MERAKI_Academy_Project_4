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
      res.status(404).json({
        success: false,
        message: `Server Error`,
      });
    });
};

module.exports = {
  createNewRole,
//   updateNewRole,
};

