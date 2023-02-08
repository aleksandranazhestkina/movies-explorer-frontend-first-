import "./Burger.css";
import React from "react";
import { Link } from "react-router-dom";
import logoAcc from "../../images/icon__COLOR_icon-main.svg";
import closeButton from "../../images/close-button.svg";

export default function Burger(props) {
  return (
    <section
    className={`burger ${props.isOpen ? "burger_opened" : ""}`}
  >
    <div className="burger__container">
      <div className="burger__links">
      <button className="burger__button" onClick={props.handleCloseClick} type="button">
        <img
          className="burger__button-image"
          src={closeButton}
          alt="кнопка закрыть"
        />
      </button>
      <Link to="/" className="burger__link">
        Главная
      </Link>
      <Link to="/movies" className="burger__link burger__link_movies">
        Фильмы
      </Link>
      <Link to="/saved-movies" className="burger__link">
        Сохранённые фильмы
      </Link>
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
