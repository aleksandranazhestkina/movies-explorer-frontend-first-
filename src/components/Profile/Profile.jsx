import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";

export default function Profile() {
  return (
    <>
      <Header isLoggedIn={true} />
      <section className="profile">
        <h2 className="profile__hello">Привет, Александра!</h2>
        <div className="profile__info">
          <div className="profile__container profile__container_name">
            <p className="profile__text profile__text_placehohder">Имя</p>
            <p className="profile__text">Nazhestkina</p>
          </div>
          <div className="profile__container">
            <p className="profile__text profile__text_placehohder">E-mail</p>
            <p className="profile__text">email@ya.ru</p>
          </div>
        </div>
        <button className="profile__button profile__footer">
          Редактировать
        </button>
        <Link to="/" className="profile__footer profile__footer_out">
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}
