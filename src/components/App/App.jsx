import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState } from "react";
import Main from "../Main/Main.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
// import Profile from "../Profile/Profile.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import moviesData from "../../utils/movies.js";

export default function App() {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  const [movies, setMovies] = useState(moviesData);

  function likeHandler(movieId) {
    setMovies(
      (currentMovies) =>
        currentMovies.map((movie) => {
          if (movie._id === movieId) {
            movie.isLiked = true;
          }
          return movie;
        }),
      {}
    );
  }

  function dislikeHandler(movieId) {
    setMovies(
      (currentMovies) =>
        currentMovies.map((movie) => {
          if (movie._id === movieId) {
            movie.isLiked = false;
          }
          return movie;
        }),
      {}
    );
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/movies">
          <Movies
            movies={movies}
            likeHandler={likeHandler}
            dislikeHandler={dislikeHandler}
          />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies movies={movies} dislikeHandler={dislikeHandler} />
        </Route>

        {/* <Route path="/profile" element={Profile} /> */}
        <Route path="*">
          <NotFound goBack={goBack} />
        </Route>
      </Switch>
    </div>
  );
}
