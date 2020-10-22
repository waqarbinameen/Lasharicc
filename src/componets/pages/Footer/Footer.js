import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";
const today = new Date();
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-link-items">
        <h2>Contact Us</h2>

        <p>
          Call us: +973 17771402 Fax: +973 17771492 <br />
          Email us: moosa@lasharigroup.com
        </p>
      </div>
      <div className="TimeTable">
        Sat - Thur: 8.00 - 18.00 | Friday: Closed | Emergency: 24hr 7days
      </div>
      <div className="containerI">
        <p>
          <iframe name="Map"
            className="responsive-iframe"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7163.279783419913!2d50.577824!3d26.143282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ac165b86562b%3A0x9f5b8e897a9846ea!2s1440%20Rd%20No%204130%2C%20Riffa!5e0!3m2!1sen!2sbh!4v1603255802008!5m2!1sen!2sbh"
            width="400"
            height="100"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </p>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo" style={{ color: '#FFF',textDecorationLine:"none"}}>
              <IoIosConstruct className="navbar-icon" />
              LASHARI CC
            </Link>
          </div>

          <small className="website-rights">
            Lashari Construction Company © {today.getFullYear()}
          </small>

          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={
                "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              }
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
