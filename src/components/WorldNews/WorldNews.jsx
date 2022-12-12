import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import axios from "axios";
import options from "./API";
import Navbar from "../NavBar/Navbar.jsx";
import Popshow from "./Popshow.jsx";
import Footer from "../Footer/Footer";

const Blog = () => {
  const [data, setData] = useState([]);

  const fetch = () => {
    axios
      .get(options)
      .then(function (response) {
        setData(response.data.articles);
        console.log(response.data.articles);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => fetch(), []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {data.map((e) => {
          return (
            <div>
              <MDBContainer className="py-5">
                <MDBRow className="gx-5">
                  <MDBCol md="6" className="mb-4">
                    <MDBRipple
                      className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                      rippleTag="div"
                      rippleColor="light"
                    >
                      <img src={e.urlToImage} className="w-100" />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                  </MDBCol>
                  <MDBCol md="6" className="mb-4">
                    <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                      {e.author}
                    </span>
                    <h4>
                      <strong>{e.title}</strong>
                    </h4>
                    <p className="text-muted">{e.description}</p>
                    <Popshow data={e} />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
