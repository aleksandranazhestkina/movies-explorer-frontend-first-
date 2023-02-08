import "./SavedMovies.css";
import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import Header from "../Header/Header.jsx";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";

export default function SavedMovies( props ) {
  const savedMovies = props.movies.filter((movie) => movie.isLiked);

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsBurgerOpen(true);
  };
  const handleCloseClick = () => {
    setIsBurgerOpen(false);
  };

  return (
    <>
      <Header isLoggedIn={true} handleBurgerClick={handleBurgerClick} />
      {isBurgerOpen && (
        <Burger isOpen={isBurgerOpen} handleCloseClick={handleCloseClick} />
      )}
      <main className="movies">
        <SearchForm />
        <MoviesCardList
          cards={savedMovies}
          dislikeHandler={props.dislikeHandler}
        />
      </main>
      <Footer />
    </>
  );
}
