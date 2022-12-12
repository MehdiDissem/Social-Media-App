import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../NavBar/Navbar.jsx";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBTextArea,
} from "mdb-react-ui-kit";

let TennisNews = () => {
  let [filtredDataByCategory, setfiltredDataByCategory] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/get/Tennis`).then((result) => {
      setfiltredDataByCategory(result.data);
    });
  }, []);

  console.log(filtredDataByCategory);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      {filtredDataByCategory.map((element, index) => {
        return (
          <div>
            <center>
              <MDBContainer className="py-5">
                <MDBCard style={{ maxWidth: "42rem" }}>
                  <MDBCardBody>
                    <div className="d-flex mb-3">
                      <a href="#!">
                        <img
                          src={element.imageuser}
                          className="border rounded-circle me-2"
                          alt="Avatar"
                          style={{ height: "40px" }}
                        />
                      </a>
                      <div>
                        <a href="#!" className="text-dark mb-0">
                          <strong>{element.username} </strong>
                        </a>
                        <a
                          href="#!"
                          className="text-muted d-block"
                          style={{ marginTop: "-6px" }}
                        >
                          <small>{element.postedat}</small> <br />
                          <small className="text-muted">
                            {element.category}
                          </small>
                        </a>
                      </div>
                    </div>
                    <div>
                      <b>{element.posttitle}</b>
                      <p>{element.postcontent}</p>
                    </div>
                  </MDBCardBody>
                  <MDBRipple
                    className="bg-image hover-overlay ripple rounded-0"
                    rippleTag="div"
                    rippleColor="light"
                  >
                    <img src={element.postimage} className="w-100" />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.2)",
                        }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <a href="#!">
                          <MDBIcon
                            fas
                            icon="thumbs-up"
                            color="primary"
                            className="me-1"
                          />
                          <MDBIcon
                            fas
                            icon="heart"
                            color="danger"
                            className="me-1"
                          />
                          <span> {element.likes} like</span>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between text-center border-top border-bottom mb-4">
                      <button class="button button-like">
                        <i class="fa fa-heart"></i>
                        <span>
                          Like
                          {/* 👍🏻 */}
                        </span>
                      </button>
                      <MDBIcon fas icon="comment-alt" className="me-2" />

                      <span>Comment </span>
                      <MDBBtn size="lg" rippleColor="dark" color="link">
                        {/* <MDBIcon fas icon="share" className="me-2" /> Share */}
                      </MDBBtn>
                    </div>
                    <div className="d-flex mb-3">
                      <a href="#!">
                        <img
                          src={element.imageuser}
                          className="border rounded-circle me-2"
                          alt="Avatar"
                          style={{ height: "40px" }}
                        />
                      </a>
                      <MDBTextArea
                        id="textAreaExample"
                        rows={2}
                        wrapperClass="w-100"
                      />

                      <div>
                        <button id="comment">comment</button>
                      </div>
                    </div>
                    <div className="d-flex mb-3"></div>
                  </MDBCardBody>
                </MDBCard>
              </MDBContainer>
            </center>
          </div>
        );
      })}
    </div>
  );
};

export default TennisNews;
