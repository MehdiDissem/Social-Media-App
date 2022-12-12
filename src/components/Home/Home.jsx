import React, { useState, useEffect } from "react";
import Blog from "../Blog/Blog.jsx";
import { getAuth, signOut } from "firebase/auth";
import OurNavbar from "../NavBar/Navbar.jsx";
import Profile from "../Profile/Profile.jsx";
import axios from "axios";
import Slider from "../Slider/Slider.jsx";
import Banner from "../Slider/Banner.jsx";
import Team from "../Team/Team";
import Footer from "../Footer/Footer.jsx";

const Home = ({ dataUser }) => {
  // console.log("------->",dataUser)
  // let [post, setPost] = useState([]);
  // let [comment, setComment] = useState([]);
  // let [check, setCheck] = useState(false);

  // const [profile, setProfile] = useState(dataUser);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/posts/getall").then((result) => {
  //     // console.log(result.data);
  //     setPost(result.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/comments/getall").then((result) => {
  //     // console.log(result.data);
  //     setComment(result.data);
  //   });
  // }, []);
  // const toggleCheck = () => {
  //   setCheck(!check);
  // };

  return (
    <div>
      <div>
        {/* <!--Navbar --> */}
        <OurNavbar />
        <div>
          <Slider />
          <div>
            <Banner />
          </div>
          <div>
            <Team />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
