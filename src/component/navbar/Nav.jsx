import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";
import ThemeContext from "../../context/Theme_C";
import LanguageContext from "../../context/Language";
import { Card } from "react-bootstrap";
import Navcart from "../navbar _of_cart/navcart";

function Nav() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      <Navbar
        className="nav  shadow rounded  bg-body-tertiary"
        id="nav"
        bg={darkMode ? "dark" : "light"}
        expand="lg"
        data-bs-theme={darkMode ? "dark" : "light"}
      >
        <Link className="nav-link border  h-100 rounded m-3" to={"/"}>
          Home
        </Link>

        <Link className="nav-link border h-100 rounded  " to={"/login"}>
          Login
        </Link>
        <Link className="nav-link border h-100 rounded " to={"/product"}>
          Products
        </Link>
        <Link className="nav-link border h-100 rounded " to={"/register"}>
          Registeration
        </Link>
        <input className="w-25 h-75 m-5 rounded border shadow"></input>
        <FontAwesomeIcon className="icon" icon={faSearch} size="1x" />

        <Link className="nav-link border h-100 rounded  " to={"/cart"}>
          <Navcart className="position-absolute top-0" />
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </Link>
        <Card className="container">
          <svg
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "10px",
              transform: `rotateZ(${darkMode ? "180deg" : "0deg"})`,
              backgroundColor: "lightblue",
              borderRadius: "50%",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={() => setDarkMode(!darkMode)}
          >
            <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
          </svg>
          <span
            style={{
              cursor: "pointer",
              color: "blue",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
            className="p-2 mx-3 h-25"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          >
            {language}
          </span>
        </Card>
      </Navbar>
    </>
  );
}
export default Nav;
