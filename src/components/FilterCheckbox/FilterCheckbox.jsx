import "./FilterCheckbox.css";
import React from "react";

export default function FilterCheckbox({ shortMovies, handleShortFilms }) {

  return (
    <label className="filter">
      <span className="filter__text">Короткометражки</span>
      <input
        className={`filter__checkbox ${shortMovies ? "filter__checkbox_checked" : ""}`}
        type="checkbox"
        onChange={handleShortFilms}
        checked={shortMovies ? true : false}
      />
    </label>
  );
}
