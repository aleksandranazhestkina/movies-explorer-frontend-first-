import logo from "../../images/pic__COLOR_landing-logo.svg"
import "./Promo.css"

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
          <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
          </h1>
          <img src={logo} alt="Логотип" className="promo__logo" />
          <ul className="promo__links">
            <li >
            <a className="promo__link promo__link_project">О проекте</a>
            </li>
            <li>
            <a className="promo__link">Технологии</a>
            </li>
            <li>
            <a className="promo__link">Студент</a>
            </li>
          </ul>
        </div>
    </section>
  )
}
