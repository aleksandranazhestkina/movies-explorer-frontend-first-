import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../Main/Main.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Movies from "../Movies/Movies.jsx";

// import SavedMovies from "../SavedMovies/SavedMovies.jsx";
// import Profile from "../Profile/Profile.jsx";
import NotFound from "../NotFound/NotFound.jsx";
// import moviesData from "../../utils/movies.js";

export default function App() {
  const history = useHistory();

  function goBack() {
    history.goBack();
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
          <Movies />
        </Route>
        {/* <Route path="/saved-movies" element={SavedMovies} />
        <Route path="/profile" element={Profile} /> */}
        <Route path="*">
          <NotFound goBack={goBack} />
        </Route>
      </Switch>
    </div>
  );
}
