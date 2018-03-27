const apiUrl = 'https://api.github.com'

export default {
  getUser (request, success, error) {

    return fetch(apiUrl + '/users/' + request + oauth)
      .then(response => response.json())
      .then(data => success(data))
      .catch(e => { if (typeof error === 'function') error(e) });

  },
  getUserRepos (request, success, error) {

    return fetch(apiUrl + '/users/' + request +'/repos')
      .then(response => response.json())
      .then(data => success(data))
      .catch(e => { if (typeof error === 'function') error(e) });

  }
}
