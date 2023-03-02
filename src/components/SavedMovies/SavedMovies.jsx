import React, { useState, useContext, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import {
  filterMovies, // фильтрация начального массива всех фильмов по запросу
  filterShortMovies, // фильтрация по длительности
} from "../../utils/movies.js";
import Header from "../Header/Header.jsx";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import CurrentUserContext from "../../context/CurrentUserContext.js";

export default function SavedMovies({
  onDeleteClick,
  savedMoviesList,
  loggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsBurgerOpen(true);
  };
  const handleCloseClick = () => {
    setIsBurgerOpen(false);
  };

  const [shortMovies, setShortMovies] = useState(false);
  const [NotFound, setNotFound] = useState(false);
  const [showedMovies, setShowedMovies] = useState(savedMoviesList);
  const [filteredMovies, setFilteredMovies] = useState(showedMovies);

  // поиск по запросу
  function handleSearchSubmit(inputValue) {
    const moviesList = filterMovies(savedMoviesList, inputValue, shortMovies);
    if (moviesList.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
      setFilteredMovies(moviesList);
      setShowedMovies(moviesList);
    }
  }

  // состояние чекбокса
  function handleShortFilms() {
    if (!shortMovies) {
      setShortMovies(true);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, true);
      setShowedMovies(filterShortMovies(filteredMovies));
      filterShortMovies(filteredMovies).length === 0
        ? setNotFound(true)
        : setNotFound(false);
    } else {
      setShortMovies(false);
      localStorage.setItem(`${currentUser.email} - shortSavedMovies`, false);
      filteredMovies.length === 0 ? setNotFound(true) : setNotFound(false);
      setShowedMovies(filteredMovies);
    }
  }

  // проверка чекбокса в локальном хранилище
  useEffect(() => {
    if (
      localStorage.getItem(`${currentUser.email} - shortSavedMovies`) === "true"
    ) {
      setShortMovies(true);
      setShowedMovies(filterShortMovies(savedMoviesList));
    } else {
      setShortMovies(false);
      setShowedMovies(savedMoviesList);
    }
  }, [savedMoviesList, currentUser]);

  useEffect(() => {
    setFilteredMovies(savedMoviesList);
    savedMoviesList.length !== 0 ? setNotFound(false) : setNotFound(true);
  }, [savedMoviesList]);

  return (
    <>
      <Header loggedIn={loggedIn} handleBurgerClick={handleBurgerClick} />
      {isBurgerOpen && (
        <Burger isOpen={isBurgerOpen} handleCloseClick={handleCloseClick} />
      )}
      <main className="movies">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          handleShortFilms={handleShortFilms}
          shortMovies={shortMovies}
        />
        {!NotFound ? (
          <MoviesCardList
            moviesList={showedMovies}
            savedMoviesList={savedMoviesList}
            onDeleteClick={onDeleteClick}
          />
        ) : (
          <p className="movies__text">Ничего не найдено</p>
          )}
      </main>
      <Footer />
    </>
  );
}
