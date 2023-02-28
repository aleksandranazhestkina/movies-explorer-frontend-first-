import "./Movies.css";
import React, { useState, useContext, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import {
  transformMovies,
  filterMovies,
  filterShortMovies,
} from "../../utils/movies.js";
import moviesApi from "../../utils/MoviesApi.js";
import CurrentUserContext from "../../context/CurrentUserContext";

export default function Movies({
  savedMoviesList,
  onLikeClick,
  onDeleteClick,
  loggedIn,
}) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(true);
  };
  const handleCloseClick = () => {
    setIsBurgerOpen(false);
  };
  const currentUser = useContext(CurrentUserContext);
  const [isLoader, setIsLoader] = useState(false);
  const [shortMovies, setShortMovies] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]); // фильмы полученные с запроса
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [NotFound, setNotFound] = useState(false);
  const [isAllMovies, setIsAllMovies] = useState([]); // все фильмы от сервера

  function handleSetFilteredMovies(movies, userQuery, shortMoviesCheckbox) {
    const moviesList = filterMovies(movies, userQuery, shortMoviesCheckbox);
    if (moviesList.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    setInitialMovies(moviesList);
    setFilteredMovies(
      shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem(
      `${currentUser.email} - movies`,
      JSON.stringify(moviesList)
    );
  }

  function handleSearchSubmit(inputValue) {
    localStorage.setItem(`${currentUser.email} - movieSearch`, inputValue);
    localStorage.setItem(`${currentUser.email} - shortMovies`, shortMovies);

    if (isAllMovies.length === 0) {
      setIsLoader(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          setIsAllMovies(movies);
          handleSetFilteredMovies(
            transformMovies(movies),
            inputValue,
            shortMovies
          );
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoader(false));
    } else {
      handleSetFilteredMovies(isAllMovies, inputValue, shortMovies);
    }
  }

  function handleShortFilms() {
    setShortMovies(!shortMovies);
    if (!shortMovies) {
      setFilteredMovies(filterShortMovies(initialMovies));
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem(`${currentUser.email} - shortMovies`, !shortMovies);
  }

  // проверка чекбокса в локальном хранилище
  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - shortMovies`) === "true") {
      setShortMovies(true);
    } else {
      setShortMovies(false);
    }
  }, [currentUser]);

  // рендер фильмов из локального хранилища
  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - movies`)) {
      const movies = JSON.parse(
        localStorage.getItem(`${currentUser.email} - movies`)
      );
      setInitialMovies(movies);
      if (
        localStorage.getItem(`${currentUser.email} - shortMovies`) === "true"
      ) {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, [currentUser]);

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
            buttonType=""
            moviesList={filteredMovies}
            savedMoviesList={savedMoviesList}
            onLikeClick={onLikeClick}
            onDeleteClick={onDeleteClick}
          />
        ) : (
          <p className="movies__text">Ничего не найдено</p>
        )}
      </main>
      <Preloader isOpen={isLoader} />
      <Footer />
    </>
  );
}
