import "./Movies.css";
import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import moviesData from "../../utils/movies.js";
import Header from "../Header/Header.jsx";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";

export default function Movies() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsBurgerOpen(true);
  };
  const handleCloseClick = () => {
    console.log("close menu click");
    setIsBurgerOpen(false);
    console.log(`isNavOpen is ${isBurgerOpen}`);
}

  return (
    <>
      <Header isLoggedIn={true} handleBurgerClick={handleBurgerClick} />
      {isBurgerOpen && <Burger isOpen={isBurgerOpen} handleCloseClick={handleCloseClick} />}
      <main className="movies">
        <SearchForm />
        <MoviesCardList moviesData={moviesData} />
      </main>
      <Footer />
    </>
  );
}
