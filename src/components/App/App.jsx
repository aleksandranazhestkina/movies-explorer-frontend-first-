import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Profile from "../Profile/Profile.jsx";
import NotFound from "../NotFound/NotFound.jsx";



export default function App() {
  const headerEndpoints = ['/movies', '/saved-movies', '/profile', '/'];
  const footerEndpoints = ['/movies', '/saved-movies', '/'];
  return (
    <div className="app">
      <Route exact path={headerEndpoints}>
      <Header />
      </Route>
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
        <Route path="/movies" element={Movies} />
        <Route path="/saved-movies" element={SavedMovies} />
        <Route path="/profile" element={Profile} />
        <Route path="*">
          <NotFound />
        </Route>
        <Route exact path={footerEndpoints}>
        <Footer />
        </Route>
      </Switch>
    </div>
  );
}
