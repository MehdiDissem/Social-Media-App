import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar.jsx";
import "./Profile.css";

export default function Profile({ profile }) {
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState();

  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  // var buttonText = show ? "Hide Component" : "Show Component";

  console.log(profile);

  const email = profile.email;
  const indexOfAt = email.indexOf("@");
  const defaultName = email.substring(0, indexOfAt);

  console.log("my id is ", profile.uid);
  const [myid, setMyId] = useState(profile.uid);
  console.log("default mail is ", email);
  console.log("my default username is ", defaultName);

  const [iduser2, setIdUser2] = useState(profile.uid);
  const [email2, setEmail2] = useState(email);
  const [username2, setUsername] = useState(defaultName);
  const [submit, setSubmit] = useState(false);

  const [bio2, setBio2] = useState("no bio here");
  const [categorie2, setCategoie2] = useState("no categorie selected");
  const [image2, setImage2] = useState("https://i.stack.imgur.com/l60Hf.png");
  const [gender2, setGender2] = useState("no gender specified");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/getMyInfo/${iduser2}`)
      .then((result) => {
        // console.log(result.data);
        setEmail2(result.data[0].mail);
        console.error(result.data[0].mail);
      });
    axios
      .get(`http://localhost:5000/api/users/getMyInfo/${iduser2}`)
      .then((result) => {
        console.log(iduser2);
        setUsername(result.data[0].username);
        setBio2(result.data[0].bio);
        setCategoie2(result.data[0].categorie);
        setImage2(result.data[0].imageuser);
      });
  }, []);

  const updateUser = () => {
    axios
      .put(`http://localhost:5000/api/users/put/${myid}`, {
        username: username2,
        bio: bio2,
        gender: gender2,
        categorie: categorie2,
        imageuser: url,
      })
      .then(() => {
        setSubmit(true);
        console.log("yeeyyy updated");
        // window.location.reload();
      });
  };

  // ddvyi3jpk
  //ahmedmejdoub

  let uplodImage = async () => {
    const form = new FormData();
    form.append("file", file); // file is a varaible contain the picture
    form.append("upload_preset", "ahmedmejdoub");
    await axios
      .post("https://api.cloudinary.com/v1_1/ddvyi3jpk/upload", form) // send the form to cloudinary
      .then((result) => {
        console.log(result.data.secure_url); // get the url of the image
        setUrl(result.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div>
        <b> Your Profile</b>{" "}
      </div>
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img class="rounded-circle mt-5" width="150px" src={image2} />
              <h4 class="font-weight-bold">{username2}</h4>
              <span class="text-black-50">{email2}</span>
              <h4>Bio :</h4>
              <p>{bio2}</p>
              <br />
              <span>Categorie :</span>
              <h5>{categorie2}</h5>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">Username : </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Update my username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Bio</label>
                  <textarea
                    type="text"
                    class="form-control"
                    placeholder="Choose a bio "
                    onChange={(e) => setBio2(e.target.value)}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Gender</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="male/female"
                    onChange={(e) => setGender2(e.target.value)}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Categorie</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Categorie"
                    onChange={(e) => setCategoie2(e.target.value)}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Update My image</label>
                  <input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="Update my photo"
                    onChange={(e) => setImage2(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    className="upload"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
              <button className="button-3-profile" onClick={uplodImage}>
                Upload Image
              </button>
              <div></div>
              <div class="mt-5 text-center">
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={updateUser}
                  // onClick={(updateUser(), navigate("/home"))}
                >
                  Save changes
                </button>
                <div>
                  {submit ? (
                    <div class="alert alert-success">
                      <strong>Success!</strong> You have added a profile
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
