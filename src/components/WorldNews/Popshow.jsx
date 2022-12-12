import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Popshow({ data }) {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <h1>{data.title}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{data.description}</h3>
        </Modal.Body>
      </Modal>

      <button
        style={{
          backgroundColor: "#77DD77",
          border: "#77DD77",
          padding: "15px",
        }}
        onClick={() => {
          setLgShow(true);
          console.log("testtt");
        }}
      >
        Read More
      </button>
    </>
  );
}
