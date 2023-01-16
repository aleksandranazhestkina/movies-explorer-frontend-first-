import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <ul className="about-project__list">
          <li className="about-project__item">
            <h3 className="about-project__item-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__item-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className="about-project__item">
            <h3 className="about-project__item-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__item-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className="about-project__scheme">
          <div className="about-project__backend">
            <span className="about-project__backend-title">1 неделя</span>
            <span className="about-project__scheme-title">Back-end</span>
          </div>
          <div className="about-project__frontend">
            <span className="about-project__frontend-title">1 неделя</span>
            <span className="about-project__scheme-title">Front-end</span>
          </div>
        </div>
      </div>
    </section>
  )
}
