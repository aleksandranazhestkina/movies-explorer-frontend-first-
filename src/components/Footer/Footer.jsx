import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
          <div className="footer__container">
            <h2 className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className="footer__navigation">
              <p className="footer__copyright">&copy;2023</p>
              <ul className="footer__links">
                <li>
                  <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                </li>
                <li>
                  <a className="footer__link" href="https://github.com/aleksandranazhestkina">Github</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
    )
}
