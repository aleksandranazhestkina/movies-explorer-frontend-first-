import "./App.css";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import mainApi from "../../utils/MainApi.js";
import CurrentUserContext from "../../context/CurrentUserContext";
import Main from "../Main/Main.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Profile from "../Profile/Profile.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import Preloader from "../Preloader/Preloader.jsx";

export default function App() {
  const history = useHistory();
  const location = useLocation();
  const [load, setLoad] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMoviesList, setSavedMoviesList] = useState([]);

  function handleRegister({ name, email, password }) {
    setIsLoader(true);
    mainApi
      .createUser(name, email, password)
      .then((data) => {
        if (data._id) {
          handleLogin({ email, password });
          history.push("/signin");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoader(false));
  }

  function handleLogin({ email, password }) {
    setIsLoader(true);
    mainApi
      .login(email, password)
      .then((jwt) => {
        if (jwt.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", jwt.token);
          history.push("/movies");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoader(false));
  }

  function handleSignOut() {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    history.push("/");
  }

  function handleProfile({ name, email }) {
    setIsLoader(true);
    mainApi
      .updateUser(name, email)
      .then((newUserData) => {
        setCurrentUser(newUserData);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoader(false));
  }

  // проверка токена и авторизация пользователя
  useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setIsLoader(true);
      mainApi
        .getUserInfo()
        .then((data) => {
          if (data) {
            setLoggedIn(true);
            setCurrentUser(data);
            history.push(path);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoader(false));
      setLoad(true);
    }
  }, []);

  // Получение информации о пользователе
  useEffect(() => {
    if (loggedIn) {
      setIsLoader(true);
      mainApi
        .getUserInfo()
        .then((res) => setCurrentUser(res))
        .catch((err) => console.log(err))
        .finally(() => setIsLoader(false), setLoad(true));
    }
  }, [loggedIn]);

  function goBack() {
    history.goBack();
  }

  // получение массива сохраненных фильмов
  useEffect(() => {
    if (loggedIn && currentUser) {
      mainApi
        .getSavedMovies()
        .then((data) => {
          const UserMoviesList = data.filter(
            (m) => m.owner === currentUser._id
          );
          setSavedMoviesList(UserMoviesList);
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser, loggedIn]);

  // cохранение фильма
  function handleSaveMovie(movie) {
    mainApi
      .addNewMovie(movie)
      .then((newMovie) => setSavedMoviesList([newMovie, ...savedMoviesList]))
      .catch((err) => console.log(err));
  }

  // удаление фильма
  function handleDeleteMovie(movie) {
    const savedMovie = savedMoviesList.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMoviesList.filter((m) => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMoviesList(newMoviesList);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <Route exact path="/signup">
            {!loggedIn ? (
              <Register handleRegister={handleRegister} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/signin">
            {!loggedIn ? (
              <Login handleLogin={handleLogin} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            setIsLoader={setIsLoader}
            onLikeClick={handleSaveMovie}
            onDeleteClick={handleDeleteMovie}
            loggedIn={loggedIn}
            savedMoviesList={savedMoviesList}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            savedMoviesList={savedMoviesList}
            onDeleteClick={handleDeleteMovie}
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            handleProfile={handleProfile}
            handleSignOut={handleSignOut}
          />
          <Route path="*">
            <NotFound goBack={goBack} />
          </Route>
        </Switch>
        <Preloader isOpen={isLoader} />
      </CurrentUserContext.Provider>
    </div>
  );
}
