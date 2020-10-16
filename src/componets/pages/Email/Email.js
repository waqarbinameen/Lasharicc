import { Row, Col, Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import React from "react";
import { FiSend } from "react-icons/fi";
import "./Email.css";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { convertLegacyProps } from "antd/lib/button/button";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_005fmrm",
        "template_s97wg5a",
        e.target,
        "user_plCewtOi2FA9XNIBX9wEq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <div class="segment">
        <h1>Contact Us</h1>
      </div>
      <Container fluid>
        <Row>
          <Col>
            <div class="contactLeft">
              {" "}
              <br /> <GoLocation /> <b>Address :</b>
              <p className="txt2">
                <b>Lashari Construction Comapny </b>, 2nd floor, Office No: 12,
                Building 1450, <br /> Road 4131, Block 941,
                <br /> Landmark: Dolphin Pool Building next to Abraj
                <br /> Riffa/Al Buhair,
                <br /> Kingdom of Bahrain.
              </p>
              <FiPhoneCall /> <b>Phone Number :</b> <br />{" "}
              <p className="txt2">+973-17771402</p>
              <br />
              <HiOutlineMail />
              <b>Email :</b> <br />{" "}
              <p className="txt2">moosa@lasharigroup.com</p>
              <br />{" "}
            </div>
          </Col>
          <Col>
            <form className="form" onSubmit={sendEmail} name="frm">
              <div className="segment" className="unit">
                <label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    required
                  />
                </label>
                &emsp;
                <label>
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    name="subject"
                  />
                </label>
              </div>
              <br />
              <br />
              <div className="segment" className="unit">
                <label>
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    name="Email"
                  />
                </label>{" "}
                &emsp;
                <label>
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    name="ContactNumber"
                    required
                  />
                </label>
              </div>
              <br />
              <br />
              <label>
                <textarea
                  className="text-area"
                  type="text"
                  placeholder="Enter Message"
                  name="message"
                  required
                />
              </label>
              <br />
              <br />
              <div className="segment">
                <button class="red buttonn" type="onSubmit">
                  <FiSend className="icon" /> Send
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
