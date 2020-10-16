import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Gallary.css";
function Gallary() {
  return (
    <>
      <div>
        <h1>Completed Project Gallary</h1>
        <Container fluid>
          <Row>
            <Col>
              <img
                className="gallery__img"
                src="./images/Logo.png"
                width="80%"
                height="80%"
              ></img>
            </Col>
            <Col>
              <img
                className="gallery__img"
                src="./images/MainLogo.jpg"
                width="80%"
                height="80%"
                alt="Image"
              ></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className="gallery__img"
                src="./images/Logo.png"
                width="80%"
                height="80%"
              ></img>
            </Col>
            <Col>
              <img
                className="gallery__img"
                src="./images/MainLogo.jpg"
                width="80%"
                height="80%"
                alt="Image"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Gallary;
