import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>We are here to hear you out.</span>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                SportApp
              </h6>
              <p>
                Community based social media app, made for RBK's first project
                in Senior Phase.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
              <p>
                <a className="text-reset" onClick={() => navigate("/home")}>
                  Home
                </a>
              </p>
              <p>
                <a className="text-reset" onClick={() => navigate("/Blog")}>
                  Blog
                </a>
              </p>
              <p>
                <a
                  className="text-reset"
                  onClick={() => navigate("/WorldNews")}
                >
                  WorldNews
                </a>
              </p>
              <p>
                <a className="text-reset" onClick={() => navigate("/profile")}>
                  Profile
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">DEVELOPED WITH</h6>
              <p>React</p>
              <p>Bootstrap</p>
              <p>Firebase</p>
              <p>MySQL</p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Bloc B24, Elgazala Technopark, Raoued, Gouvernorat de l'Ariana,
                2088 Ariana – Tunisie.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                contact@RBK.tn
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 216 55 62 02 93
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 216 20 05 70 68
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Link to our repo in{" "}
        <a
          className="text-reset fw-bold"
          href="https://github.com/SportsAppProject/SportsApp"
        >
          Github
        </a>
      </div>
    </MDBFooter>
  );
}
