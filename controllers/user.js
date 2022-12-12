const users = require("../database/models/user.js");

module.exports = {
  getAllUsers: function (req, res) {
    users.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  addUser: function (req, res) {
    users.add(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body.iduser,
      req.body.mail,
      req.body.username
    );
  },

  updateUser: function (req, res) {
    users.update(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body.username,
      req.body.bio,
      req.body.gender,
      req.body.categorie,
      req.body.imageuser,
      req.params.iduser
    );
  },

  getMyInfo: function (req,res) {
    users.getMyInfo(
      function(err,response){
        if(err) res.status(500).send(err)
        else res.json(response)
      },req.params.iduser
    )
  }
};
