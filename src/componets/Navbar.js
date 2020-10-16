import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";
import { Button } from "./Button";
import { IconContext } from "react-icons/lib";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <IoIosConstruct className="navbar-icon" />
              LASHARI
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="  nav-item">
                <Link
                  smooth
                  to="/#home"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </Link>
              </li>
              <li className="  nav-item">
                <Link
                  smooth
                  to="/#services"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Services
                </Link>
              </li>
              <li className="  nav-item">
                <Link
                  smooth
                  to="/#gallary"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Gallary
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth
                  to="/#aboutus"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About Us
                </Link>
              </li>
              <li className="  nav-item">
                <Link
                  smooth
                  to="/ContactUs"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/Login" className="btn-link">
                    <Button buttonStyle="btn--outline"> Login </Button>
                  </Link>
                ) : (
                  <Link to="/Login" className="btn-link" onClick={handleClick}>
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Login
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
