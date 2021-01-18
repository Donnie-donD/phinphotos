import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaCameraRetro } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <FaCameraRetro className="navbar-icon" />
          PHINPHOTOS
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
                <Button buttonStyle="btn--outline">SIGN UP</Button>
              </Link>
            ) : (
              <Link to="/signup" className="btn-link">
                <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
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
