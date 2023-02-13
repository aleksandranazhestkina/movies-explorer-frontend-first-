import React, {useEffect} from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../hooks/useFormValidation';

export default function Register({ handleRegister }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="register">
      <form className="register__form" name="register" noValidate onSubmit={handleSubmit}>
        <Link to="/" className="register__link">
          <img src={logo} alt="Логотип" className="register__logo" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <div className="register__labels-container">
          <label className="register__label">
            <span className="register__label-text">Имя</span>
            <input
              name="name"
              className="register__input"
              type="text"
              placeholder=""
              required
              minLength="2"
              maxLength="30"
              pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
              onChange={handleChange}
            />
            <span className="register__error register__error_input">{errors.name}</span>
          </label>
          <label className="register__label">
            <span className="register__label-text">E-mail</span>
            <input
              name="email"
              className="register__input"
              type="email"
              placeholder=""
              minLength="2"
              maxLength="40"
              required
              onChange={handleChange}
            />
            <span className="register__error register__error_input">{errors.email}</span>
          </label>
          <label className="register__label">
            <span className="register__label-text">Пароль</span>
            <input
              name="password"
              className="register__input"
              type="password"
              placeholder=""
              minLength="2"
              maxLength="30"
              required
              onChange={handleChange}
            />
            <span className="register__error register__error_input">{errors.password}</span>
          </label>
        </div>
        <button
          type="submit"
          className={`register__button ${isValid && "register__button_disabled"}`}
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
        <span className="register__support">
          Уже зарегистрированы?&nbsp;
          <Link to="signin" className="register__link">
            Войти
          </Link>
        </span>
      </form>
    </main>
  )
}
