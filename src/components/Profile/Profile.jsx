import React from "react";
import { useEffect, useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import CurrentUserContext from "../../context/CurrentUserContext";

export default function Profile({ handleSignOut, handleProfile, loggedIn }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleProfile(values);
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  const requirementValidity =
    !isValid ||
    (currentUser.name === values.name && currentUser.email === values.email);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <form
          className="profile__form"
          name="profile"
          noValidate
          onSubmit={handleSubmit}
        >
          <h1 className="profile__hello">{`Привет, ${
            currentUser.name || ""
          }!`}</h1>
          {/* <h1 className="profile__hello">Привет, Александра!</h1> */}
          <div className="profile__container">
            <label className="profile__text">
              <span className="profile__text profile__text_placeholder">
                Имя
              </span>
              <input
                name="name"
                className="profile__input profile__input_name"
                onChange={handleChange}
                value={values.name}
                type="text"
                required
                minLength="2"
                maxLength="30"
                pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
              />
              <span className="profile__error-name profile__error-name_input">
                {errors.name}
              </span>
            </label>
            <label className="profile__text">
              <span className="profile__text profile__text_placeholder">
                E-mail
              </span>
              <input
                name="email"
                className="profile__input"
                onChange={handleChange}
                value={values.email}
                type="email"
                required
              />
              <span className="profile__error profile__error-name_">
                {errors.email}
              </span>
            </label>
          </div>
          <button
            className={`profile__button profile__footer ${
              requirementValidity ? "profile__button_disabled" : ""
            }`}
            // className="profile__button profile__footer"
            type="submit"
            disabled={requirementValidity ? true : false}
          >
            Редактировать
          </button>
          <button
            type="submit"
            className="profile__button profile__footer profile__footer_out"
            onClick={handleSignOut}
          >
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}
