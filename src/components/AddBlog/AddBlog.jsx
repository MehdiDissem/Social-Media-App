import React, { useState } from "react";
import { MDBInputGroup } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddBlog.css";

let AddBlog = (props) => {
  console.log("l id mel addblog", props.id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [select, setSelect] = useState("");
  const [data, setData] = useState([]);
  const [submit, setSubmit] = useState(false);

  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  // console.log(select);

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

  let posted_at =
    name +
    " " +
    new Date().getDate() +
    " " +
    "2022" +
    " " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes();

  let addPost = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/posts/add", {
        postedat: "Posted on : " + posted_at,
        posttitle: title,
        postcontent: content,
        postimage: url,
        category: select,
        user_iduser: props.id, //  logicly the connected personne
        like: 0,
      })

      .then(() => {
        window.location.reload(false);
        console.log("added");
      });
  };

  // ddvyi3jpk
  //ahmedmejdoub

  let uplodImage = async () => {
    const form = new FormData();
    form.append("file", file); // file is a varaible contain the picture
    form.append("upload_preset", "ahmedmejdoub");
    await axios
      .post("https://api.cloudinary.com/v1_1/ddvyi3jpk/upload", form)
      .then((result) => {
        console.log(result.data.secure_url);
        setUrl(result.data.secure_url);
        setSubmit(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <body>
        <div class="wrapper">
          <div class="title">
            <h2>Add Post </h2>
          </div>
          <div class="content">
            <p></p>
            <ul>
              <input
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                type="text"
                placeholder="Title"
              ></input>
            </ul>
            <ul>
              <input
                onChange={(event) => {
                  setContent(event.target.value);
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
          <button className="button-3 " onClick={uplodImage}>
            Upload Image
            {submit ? (
              <div class="alert alert-success">
                <strong>Success!</strong> Image URL created, you can save now.
              </div>
            ) : null}
          </button>
          <div>
            <select
              class="wrapper1"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option> --- </option>
              <option value="football"> football </option>
              <option value="basketball"> basketball </option>
              <option value="tennis"> tennis </option>
            </select>
          </div>

          <div class="details">
            <p>
              <span> Choose the Categories </span>
            </p>

            <button
              onClick={(e) => {
                addPost(e);
                navigate("/blog");
              }}
            >
              Save
            </button>
          </div>
        </div>
      </body>
    </div>
  );
};

export default AddBlog;
