import axios from 'axios';

export const makeRequest = (method = 'get') => (url) => ({ headers, params, data } = {}) =>
  new Promise((resolve, reject) => {
    axios({
      method,
      url,
      headers,
      params,
      data,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        // TODO: refresh token when status 401
        reject(error.response.data);
      });
  });
