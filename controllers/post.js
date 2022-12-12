const posts = require("../database/models/post.js");

module.exports = {
  getAllPosts: function (req, res) {
    posts.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },

  //method to get all post by categorie.
  getPost: function (req, res) {
    posts.getOne(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.category);
  },
  //method to add a post to the database via the respective model function.

  addPost: function (req, res) {
    posts.add(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body.postedat,
      req.body.posttitle,
      req.body.postcontent,
      req.body.postimage,
      req.body.category,
      req.body.user_iduser,
      0
    );
  },

  delPost: function (req, res) {
    posts.del(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.id);
  },

  updatepost: function (req, res) {
    posts.putpost(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body.postedat,
      req.body.posttitle,
      req.body.postcontent,
      req.body.postimage,
      req.body.category,
      req.params.id
    );
  },

  updatelike: function (req, res) {
    posts.putlike(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body.like,
      req.params.id
    );
  },

  getFootballNews: function (req, res) {
    posts.football(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
};
