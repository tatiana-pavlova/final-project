class Api {
  constructor (config) {
    this._baseUrl = config.url;
  }


  getPokemonCards() {
    return fetch (`${this._baseUrl}/pokemon`)
      .then ((res) => {
        return this._checkResponse(res)
      })
  }

  getPokemonInfo(id) {
    return fetch (`${this._baseUrl}/pokemon/${id}`)
      .then ((res) => {
        return this._checkResponse(res)
      })
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api({url: 'https://pokeapi.co/api/v2', 
});

export default api;