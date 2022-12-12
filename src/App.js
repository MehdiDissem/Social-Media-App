import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog.jsx";
import AddBlog from "./components/AddBlog/AddBlog.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import WorldNews from "./components/WorldNews/WorldNews.jsx";
import FootballNews from "./components/FootballNews/FootballNews.jsx";
import BasketballNews from "./components/FootballNews/BasketballNews.jsx";
import TennisNews from "./components/FootballNews/TennisNews.jsx";
import UpdateBlog from "./components/UpdateBlog/UpdateBlog";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [initializing, setInitializing] = useState(true);
  const [view, setView] = useState("Login");
  const [update, setUpdate] = React.useState([]);

  function changeView() {
    if (initializing) return null;
    if (!user) {
      navigate("/login");
    } else {
      navigate("/home");
    }
  }

  useEffect(() =>
    onAuthStateChanged(auth, (user) => {
      console.log("user ", user);
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
      if (!user) {
        // navigate("/login");
      } else {
        // navigate("/home");
      }
    })
  );

  let selectBlog = (element) => {
    setUpdate(element);
    navigate("/UpdateBlog");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home profile={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/blog"
          element={<Blog selectBlog={selectBlog} profile={user} />}
        />
        <Route path="/WorldNews" element={<WorldNews />} />
        <Route path="/Profile" element={<Profile profile={user} />} />
        <Route path="/Football" element={<FootballNews />} />
        <Route path="/Basketball" element={<BasketballNews />} />
        <Route path="/Tennis" element={<TennisNews />} />
        <Route path="/UpdateBlog" element={<UpdateBlog update={update} />} />
      </Routes>
    </div>
  );
}

export default App;
