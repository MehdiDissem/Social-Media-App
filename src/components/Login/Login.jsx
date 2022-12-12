import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "../Home/Home";
import ClipLoader from "react-spinners/ClipLoader";
import "./Login.css";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyA05fVHSqrQW08aW81v77i8eC6U0TU4E88",
  authDomain: "mypp-2369a.firebaseapp.com",
  databaseURL:
    "https://mypp-2369a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mypp-2369a",
  storageBucket: "mypp-2369a.appspot.com",
  messagingSenderId: "410505824221",
  appId: "1:410505824221:web:ca9180442a32f25fe49834",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  const insertUser = (uid, emailparam) => {
    const index = emailparam.indexOf("@");
    const name = emailparam.substring(0, index);
    console.log("**************** uid ", uid);
    console.log("**************** email ", emailparam);
    console.log("**************** email ", name);
    axios
      .post("http://localhost:5000/api/users/add", {
        iduser: uid,
        mail: emailparam,
        username: name,
      })
      .then((res) => {
        console.log("############# yeyyy it's added");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const submitThis = (e) => {
    setLoading(true);
    e.preventDefault();
    const info = { email: email, passw: passw };
    setDataInput([info]);
    createUserWithEmailAndPassword(auth, email, passw)
      .then((Credential) => {
        setLoading(false);
        setUser(Credential.user);
        console.log("User Created test user", user);
        // here to put the function that will insert in the database
        console.log("######## ", Credential.user.uid);
        console.log("######## ", Credential.user.email);
        insertUser(Credential.user.uid, Credential.user.email); // CALLING THE FUNCTION OF INSERTING USER INTO DATABASE
        navigate("/home");
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, passw)
      .then((res) => {
        console.log("User LoggedIn", res.user);
        navigate("/home");
      })
      .then((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  };

  if (loading) {
    return <ClipLoader color={"green"} loading={loading} size={300} />;
  }

  return (
    <div className="Backkkground">
      {/* <!--Navbar --> */}
      {/* <!--/.Navbar --> */}
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://i.ibb.co/PGHJMK5/pngaaa-com-4051963.png"
                className="img-fluid"
                alt="x"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={(e) => submitThis(e)}>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" style={{ color: "white" }}>
                    Email address
                  </label>
                  {error ? (
                    <p style={{ color: "red" }}>
                      Invalid Credentials: * Please make sure your password has
                      at least 6 characters. * If your account exists already,
                      press Login Instead.
                    </p>
                  ) : null}
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    onChange={(e) => setPassw(e.target.value)}
                  />
                  <label className="form-label" style={{ color: "white" }}>
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* <!-- Checkbox --> */}
                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a> */}
                </div>

                {/* <!-- Submit button AND INSERTING THE NEW USER TO THE DATABASE --> */}
                <button
                  type="submit"
                  onClick={() => console.log("----------->", user.uid)}
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#77DD77", borderColor: "#77DD77" }}
                >
                  Sign in
                </button>

                <button
                  onClick={handleLogin}
                  className="btn btn-primary btn-lg btn-block"
                  style={{
                    backgroundColor: "#77DD77",
                    borderColor: "#77DD77",
                    margin: "5px",
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
