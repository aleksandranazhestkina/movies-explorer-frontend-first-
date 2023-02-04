import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";

export default function MoviesCardList({ moviesData }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
    {moviesData.map((film) => (
          <MoviesCard
            key={film.id}
            film={film}
            name={film.title}
          />
         ))}
      </ul>
      <button className="movies-card-list__show-more">Ещё</button>
    </section>
  );
}
