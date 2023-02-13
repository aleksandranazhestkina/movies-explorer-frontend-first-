import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.jsx"

export default function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" name="search">
        <input
          className="search__input"
          name="search"
          minLength="2"
          maxLength="40"
          type="text"
          placeholder="Фильм"
          autoComplete="off"
          required
        />
        <span className="search__error"></span>
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox />
    </section>
  )
}
