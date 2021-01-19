import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { FaBars, FaTimes, FaCameraRetro } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  console.log(click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <FaCameraRetro className="navbar-icon" />
          Phin Photos
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portifolio" className="nav-links">
              Portifolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/servicos" className="nav-links">
              Serviços
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-links">
              Contato
            </Link>
          </li>
          <li className="nav-btn">
            {button ? (
              <Link to="/signup" className="btn-link">
                <Button buttonStyle="btn--outline" buttonColor="btn--outline">
                  SIGN UP
                </Button>
              </Link>
            ) : (
              <Link to="/signup" className="btn-link">
                <Button buttonStyle="btn--medium" buttonSize="btn--mobile">
                  SIGN UP
                </Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
