import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.jsx";

export default function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
    {props.cards.map((film) => (
          <MoviesCard
            key={film._id}
            name={film.title}
            isLiked={!!film.isLiked}
            id={film._id}
            film={film}
            onClickHandler={film.isLiked ? props.dislikeHandler : props.likeHandler}
          />
        ))}
      </ul>
    </section>
  );
}
