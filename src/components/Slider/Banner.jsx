import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HeroSectionWithNavbar() {
  return (
    <div>
      <header>
        <div className="p-5 text-center bg-light">
          <h1 className="mb-3">JOIN OUR COMMUNITY</h1>
          <h4 className="mb-3">“Overpower. Overtake. Overcome.”</h4>
        </div>
      </header>
      <div className="HomeDiv">
        <Container>
          <Row>
            <Col>
              <img
                className="homeImage"
                src="https://cdn.dribbble.com/users/6228692/screenshots/17752308/media/3479d7421ad72d75ddea3b00a62ba488.png?compress=1&resize=1000x750&vertical=top"
              />
            </Col>
            <Col>
              <h3 class="ms--7 text--base mb10 mt0-md">
                A new way to connect with active members of society
              </h3>
              <p class="ms--3__sans">
                We help people connect with an engaged audience of parents,
                players, fans and coaches
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
