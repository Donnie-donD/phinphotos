import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { FaBars, FaTimes, FaCameraRetro } from "react-icons/fa";
import { RiCameraLensFill } from "react-icons/ri";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  //Função para mostrar o botão quando estiver em outros dispositivos com uma resolução menor que 960

  const showButton = () => {
    if (window.innerWidth <= 960) {
      //verifica se o tamanho interno da janela é menor ou igual a 960
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //Adicionado um evento a janela, que monitora o redimensionamento e chama uma função
  //O botão aparece caso o redimensionamento bata com o descrito na função

  window.addEventListener("resize", showButton);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <RiCameraLensFill className="navbar-icon" />
          Phin Photos
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portifolio"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Portifolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/servicos"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Serviços
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-links" onClick={closeMobileMenu}>
              Contato
            </Link>
          </li>
          <li className="nav-btn">
            {button ? (
              <Link to="/signup" className="btn-link">
                <Button
                  buttonStyle="btn--outline"
                  buttonColor="btn--outline"
                  onClick={closeMobileMenu}
                >
                  SIGN UP
                </Button>
              </Link>
            ) : (
              <Link to="/signup" className="btn-link">
                <Button
                  buttonStyle="btn--medium"
                  buttonSize="btn--mobile"
                  onClick={closeMobileMenu}
                >
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
