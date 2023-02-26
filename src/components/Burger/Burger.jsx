import "./Burger.css";
import React from "react";
import { Link } from "react-router-dom";
import logoAcc from "../../images/icon__COLOR_icon-main.svg";
import closeButton from "../../images/close-button.svg";

export default function Burger( {isOpen, handleCloseClick}) {
  const activeLink = `burger__link_active_${isOpen ? 'mobile' : 'desktop'}`;

  return (
    <section
    className={`burger ${isOpen ? "burger_opened" : ""}`}
  >
    <div className="burger__container">
      <div className="burger__links">
      <button className="burger__button" onClick={handleCloseClick} type="button">
        <img
          className="burger__button-image"
          src={closeButton}
          alt="кнопка закрыть"
        />
      </button>
      <a href="/" className="burger__link" activeClassName={activeLink}>
        Главная
      </a>
      <a href="/movies" className="burger__link" activeClassName={activeLink}>
        Фильмы
      </a>
      <a href="/saved-movies" className="burger__link" activeClassName={activeLink}>
        Сохранённые фильмы
      </a>
      </div>
      <Link
        to="/profile"
        className="burger__link burger__link_account"
      >
        Аккаунт
        <div className="burger__account">
          <img
            className="burger__account-logo"
            src={logoAcc}
            alt="иконка аккаунта"
          />
        </div>
      </Link>
    </div>
  </section>
  );
}
