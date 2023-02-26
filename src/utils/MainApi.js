import { BASE_URL } from './constants';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  };


  _requestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return res.json()
        .then(err => Promise.reject(err.message));
    }
  };

  // регистрация
  createUser(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })
      .then(res => this._requestResult(res));
  };

  // вход
  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => this._requestResult(res));
  };

  // запрос данных пользователя
 getUserInfo() {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then((res) => this._requestResult(res))
      .then((data) => {
        return data;
      })
  }
  // запрос на редактирование данных пользователя
  updateUser(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => this._requestResult(res));
  }

  // Запрос фильмов
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((res) => this._requestResult(res));
  }

  // Запрос на добавление фильма
  addNewMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then((res) => this._requestResult(res));
  }

  // Запрос на удаление фильма
  deleteMovie(data) {
    return fetch(`${this._baseUrl}/movies/${data}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((res) => this._requestResult(res));
  }
}

const mainApi = new Api({
  baseUrl: BASE_URL,
});

export default mainApi;

// return Promise.reject(
//   `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
// );
