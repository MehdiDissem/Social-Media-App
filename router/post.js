const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  addPost,
  getPost,
  delPost,
  updatepost,
  updatelike,
  getFootballNews, // getting only the news of football .
} = require("../controllers/post.js");

router.get("/getFootballNews", getFootballNews); // getting only the news of football .

router.get("/getall", getAllPosts); // get all posts

router.get("/get/:category", getPost); // get all post by categorie

router.post("/add", addPost); // add post

router.delete("/del/:id", delPost); // delete post

router.put("/update/:id", updatepost); // update post

router.put("/updatelike/:id", updatelike); // update like of post !!

module.exports = router;
