const comment = require("../database/models/comment.js");

module.exports = {
  getAllComments: function (req, res) {
    comment.getAll(function (err, result) {
      if (err) res.status(500).send(err);
      else res.json(result);
    });
  },

  addComment: function (req, res) {
    comment.add(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body.commentcontent,
      req.body.likes,
      req.body.user_iduser,
      req.body.post_idpost
    );
  },

  deletecomment: function (req, res) {
    comment.delete(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    }, req.params.id);
  },

  updatecomment: function (req, res) {
    comment.putcomment(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.body.commentcontent,
      req.params.id
    );
  },

  getNumber:function(req,res){
    comment.getNumber(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.params.idpost
    )
  },

  getCommentOnePost:function(req,res){
    comment.getCommentOnePost(
      function (err, results) {
        if (err) res.status(500).send(err);
        else res.json(results);
      },
      req.params.idpost
    )
  },

  likeComment:function(req,res){
    comment.likeComment((error,results)=>{
      if(error) res.status(500).send(error);
      else res.json(results);
    },req.params.idcomment)
  }


};
