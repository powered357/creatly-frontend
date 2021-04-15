import axios from 'axios';

import { apiRefreshToken } from 'API/auth';

import { getRefreshToken } from 'UTILS/getRefreshToken';
import { getToken } from 'UTILS/getToken';

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
        console.log({ error });
        if (error?.response?.status === 401) {
          const isAdmin = error.config.url.includes('admins');

          apiRefreshToken({ token: getRefreshToken(isAdmin), isAdmin }).then((res) => {
            console.log('refresh response', { res });
            retryRequest(error, resolve, reject);
          });
        }
        reject(error.response);
      });
  });

const retryRequest = (error, resolve, reject) => {
  const config = {
    ...error.config,
    headers: { ...error.config.headers, Authorization: `Bearer ${getToken()}` },
  };

  axios
    .request(config)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
};
