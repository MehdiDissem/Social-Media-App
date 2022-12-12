import React, { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import axios from "axios";
import Search from "../search/Search.jsx";
import Profile from "../Profile/Profile.jsx";
import { useNavigate } from "react-router-dom";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBButton,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import WorldNews from "../WorldNews/WorldNews.jsx";
import FootballNews from "../FootballNews/FootballNews.jsx";
import "./Navbar.css";

function OurNavbar(props) {
  const navigate = useNavigate();
  const [view, setView] = useState("Home");
  const [showBasic, setShowBasic] = useState(false);

  const [searched, setSearched] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [check, setCheck] = useState(false);

  // useEffect(() => {
  //   async function getResults() {
  //     const results = await axios(
  //       "http://localhost:5000/api/posts/getFootballNews"
  //     );
  //     setFootballNews(results.data);
  //   }
  //   getResults();
  // }, []);

  const disconnect = () => {
    const auth = getAuth();
    signOut(auth)
      .then((res) => {
        console.log(res);
        if (res === undefined) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let findPost = () => {
    axios.get("http://localhost:5000/api/posts/getall").then((result) => {
      // console.log(result.data);
      setSearchedData(result.data);
      // setView("Search");
    });
  };

  useEffect(() => findPost(), []);
  // console.log("getAll", searchedData[0]["posttitle"]);

  function fill() {
    return searchedData.filter((e) => e["posttitle"].includes(searched));
  }
  return (
    <div>
      <MDBNavbar expand="lg" style={{ backgroundColor: "#77DD77" }}>
        <MDBContainer fluid style={{ backgroundColor: "#77DD77" }}>
          <MDBNavbarBrand href="#">
            <img
              src="https://i.ibb.co/d4qS7fY/clipart2274341.png"
              alt="..."
              height="36"
            />
            SocialSports
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  onClick={() => navigate("/home")}
                >
                  <div>Home</div>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => navigate("/Profile")}>
                  Profile
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => navigate("/Blog")}>
                  Blog
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink onClick={() => navigate("/worldnews")}>
                  World News
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Categories
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link onClick={() => navigate("/Football")}>
                      FootBall
                    </MDBDropdownItem>
                    <MDBDropdownItem link onClick={() => navigate("/Tennis")}>
                      Tennis
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      link
                      onClick={() => navigate("/Basketball")}
                    >
                      Basketball
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group w-auto">
              <input
                onChange={(event) => {
                  setSearched(event.target.value);
                }}
                type="search"
                className="form-control"
                placeholder="Type Something"
                aria-label="Search"
              />
            </form>
            <div></div>
            <button
              id="but"
              onClick={() => {
                console.log(fill());
                fill();
                setView("Search");
              }}
            >
              Search
            </button>
          </MDBCollapse>
          <MDBNavbarItem>
            <button
              type="button"
              class="btn btn-primary"
              onClick={disconnect}
              style={{ backgroundColor: "red", border: "red" }}
            >
              Logout
            </button>
          </MDBNavbarItem>
        </MDBContainer>
      </MDBNavbar>
      {view === "Search" && <Search serchedData={fill()} />}
    </div>
  );
}

export default OurNavbar;
