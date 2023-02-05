import "./MoviesCard.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ film }) {
  const location = useLocation();

  const [isLiked, setIsCardSaved] = useState(false);

  const handleOnClick = () => {
    setIsCardSaved(!isLiked);
  };

  return (
    <li className="movies-card">
      <article className="movies-card__item">
        <img
          src={film.image}
          className="movies-card__poster"
          alt="кадр из фильма"
        />
        <div className="movies-card__description">
          <h2 className="movies-card__title"> {film.title}</h2>
          {location.pathname === "/movies" && (
            <button
              type="button"
              className={`movies-card__save movies-card__save${
                !isLiked ? "" : "_active"
              }`}
              onClick={handleOnClick}
            ></button>
          )}
          {location.pathname === "/saved-movies" && (
            <button
              type="button"
              className="movies-card__button-delete"
              onClick={handleOnClick}
            ></button>
          )}
        </div>
        <span className="movies-card__duration">{film.duration}</span>
      </article>
    </li>
  );
}
