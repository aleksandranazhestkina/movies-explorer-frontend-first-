import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__projects">
          <li className="portfolio__project">
            <a
              className="portfolio__link"
              href="https://github.com/aleksandranazhestkina/how-to-learn"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__project">
            <a
              className="portfolio__link"
              href="https://github.com/aleksandranazhestkina/russian-travel"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__project">
            <a
              className="portfolio__link"
              href="https://github.com/aleksandranazhestkina/react-mesto-api-full"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
