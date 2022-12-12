import React, { useState } from "react";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBTextArea,
} from "mdb-react-ui-kit";

let Search = (props) => {
  //   console.log(props.serchedData);

  return props.serchedData.map((e) => {
    return (
      <div>
        <div>
          <div>
            <center>
              <MDBContainer className="py-5">
                <MDBCard style={{ maxWidth: "42rem" }}>
                  <MDBCardBody>
                    <div className="d-flex mb-3">
                      <img
                        src={e.postimage}
                        className="border rounded-circle me-2"
                        alt="Avatar"
                        style={{ height: "40px" }}
                      />
                      <div>
                        <a href="#!" className="text-dark mb-0">
                          <strong> {e.username} </strong>
                        </a>
                        <a
                          href="#!"
                          className="text-muted d-block"
                          style={{ marginTop: "-6px" }}
                        >
                          <small> {e.postedat}</small> <br />
                          <small className="text-muted">{e.categories}</small>
                        </a>
                      </div>
                    </div>
                    <div>
                      <b>{e.posttitle}</b>
                      <p>{e.postcontent}</p>
                    </div>
                  </MDBCardBody>
                  <MDBRipple
                    className="bg-image hover-overlay ripple rounded-0"
                    rippleTag="div"
                    rippleColor="light"
                  >
                    <img src={e.postimage} className="w-100" />
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
                          <span> {e.likes} likes</span>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between text-center border-top border-bottom mb-4">
                      <button class="button button-like">
                        <i class="fa fa-heart"></i>
                        <span>Like</span>
                      </button>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBContainer>
            </center>
          </div>
        </div>
      </div>
    );
  });
};

export default Search;
