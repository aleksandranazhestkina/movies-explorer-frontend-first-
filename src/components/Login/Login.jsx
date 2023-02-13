import './Login.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../hooks/useFormValidation';


export default function Login({handleLogin}) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);


  return (
    <main className="login">
      <form
        className="login__form"
        name="login"
        noValidate
        onSubmit={handleSubmit}
      >
        <Link to='/' className='login__link'>
          <img src={logo} alt="Логотип" className="login__logo" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <div className="login__labels-container">
          <label className="login__label">
            <span className="login__label-text">E-mail</span>
            <input
              name="email"
              className="login__input"
              type="email"
              placeholder=""
              minLength="2"
              maxLength="30"
              required
              onChange={handleChange}
            />
            <span className="login__error login__error_input">{errors.email}</span>
          </label>
          <label className="login__label">
            <span className="login__label-text">Пароль</span>
            <input
              name="password"
              className="login__input"
              type="password"
              placeholder=""
              minLength="2"
              maxLength="30"
              required
              onChange={handleChange}
            />
            <span className="login__error login__error_input">{errors.password}</span>
          </label>
        </div>
        <button
          type="submit"
          className={`login__button ${!isValid && "login__button_disabled"}`}
          disabled={!isValid}
        >
          Войти
        </button>
        <span className="login__support">
          Ещё не зарегистрированы?&nbsp;
          <Link to='/signup' className="login__link">
            Регистрация
          </Link>
        </span>
      </form>
    </main>
  );
}
