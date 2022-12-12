const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const postsRoute = require("../router/post.js");
const usersRoute = require("../router/user.js");
const commentsRoute = require("../router/comment.js");

app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute);
app.use("/api/comments", commentsRoute);

module.exports = app;
