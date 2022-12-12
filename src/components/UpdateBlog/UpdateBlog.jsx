import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar.jsx";
import "./UpdateBlog.css";

let UpdateBlog = (props) => {
  console.log(props.update, "hethi mel updateblog");

  let [newPostTitle, setNewPostTitle] = useState("");
  let [newPostContent, setNewPostContent] = useState("");
  let [newPostImage, setNewPostImage] = useState("");
  let [newCategory, setNewCategory] = useState("");

  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const navigate = useNavigate();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let name = month[new Date().getMonth()];

  let updated_at =
    name +
    " " +
    new Date().getDate() +
    " " +
    "2022" +
    " " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes();

  let UpdatePoste = () => {
    const idpost = props.update;
    axios
      .put(`http://localhost:5000/api/posts/update/${idpost}`, {
        postedat: "Updated At : " + updated_at,
        posttitle: newPostTitle,
        postcontent: newPostContent,
        postimage: url,
        categorie: newCategory,
      })
      .then(() => {
        console.log("updated");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let uplodImage = async () => {
    const form = new FormData();
    form.append("file", file); // file is a varaible contain the picture
    form.append("upload_preset", "ahmedmejdoub");
    await axios
      .post("https://api.cloudinary.com/v1_1/ddvyi3jpk/upload", form)
      .then((result) => {
        console.log(result.data.secure_url);
        setUrl(result.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <body>
        <div class="wrapperA">
          <div class="title">
            <h2>Update Post </h2>
          </div>
          <div class="content">
            <p></p>
            <ul>
              <input
                onChange={(event) => {
                  setNewPostTitle(event.target.value);
                }}
                type="text"
                placeholder="New Title"
              ></input>
            </ul>
            <ul>
              <input
                onChange={(event) => {
                  setNewPostContent(event.target.value);
                }}
                type="text"
                placeholder="Content"
              ></input>
            </ul>

            <ul>
              <div>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </ul>
          </div>
          <button className="button-3" onClick={uplodImage}>
            Upload Image
          </button>
          <div>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              class="wrapperA1"
            >
              <option> --- </option>
              <option value="football"> football </option>
              <option value="basketball"> basketball </option>
              <option value="tennis"> tennis </option>
            </select>
          </div>
          <div class="details">
            <p>
              <span> Choose The New Categories </span>
            </p>
            <button
              onClick={() => {
                UpdatePoste();
                navigate("/Blog");
              }}
            >
              Update
            </button>
          </div>
        </div>
      </body>
    </div>
  );
};

export default UpdateBlog;
