import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { transformDuration } from '../../utils/movies.js';

export default function MoviesCard({ movie, saved, onLikeClick, onDeleteClick }) {
  const location = useLocation();

  // сохранение фильма
  function handleLikeClick() {
    onLikeClick(movie);
  }

  // удаление фильма
  function handleDeleteClick() {
    onDeleteClick(movie);
  }
  return (
    <li className="movies-card">
      <article className="movies-card__item">
      <a target="_blank" rel="noreferrer" href={movie.trailerLink}>
        <img
          src={movie.image}
          title={`Описание: ${movie.description} \n\nСнято: ${movie.country} ${movie.year}г.`}
          className="movies-card__poster"
          alt={movie.nameRU}
        />
          </a>
        <div className="movies-card__description">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          {location.pathname === "/movies" && (
            <button
              type="button"
              className={`movies-card__save movies-card__save${
                saved ? "_active" : ""
              }`}
              onClick={saved ? handleDeleteClick : handleLikeClick}
            ></button>
          )}
          {location.pathname === "/saved-movies" && (
            <button
              type="button"
              className="movies-card__button-delete"
              onClick={handleDeleteClick}
            ></button>
          )}
        </div>
        <span className="movies-card__duration">{transformDuration(movie.duration)}</span>
      </article>
    </li>
  );
}
