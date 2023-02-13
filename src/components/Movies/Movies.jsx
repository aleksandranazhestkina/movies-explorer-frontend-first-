import "./Movies.css";
import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader"

export default function Movies(props) {
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
          buttonType=""
          cards={props.movies}
          likeHandler={props.likeHandler}
          dislikeHandler={props.dislikeHandler}
        />
      </main>
      <Preloader />
      <Footer />
    </>
  );
}
