import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx"
import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
