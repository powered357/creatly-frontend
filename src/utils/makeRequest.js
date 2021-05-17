import axios from 'axios';

import { apiRefreshToken } from 'API/auth';

import { ROUTES } from 'CONSTANTS/routes';

import history from 'UTILS/history';
import { getRefreshToken, rewriteTokens } from 'UTILS/manageTokens';

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
        const isAdmin = error.config.url.includes('admins');

        switch (error?.response?.status) {
          case 401: {
            apiRefreshToken({ token: getRefreshToken(isAdmin), isAdmin })
              .then((res) => {
                const { accessToken, refreshToken } = res.data;

                rewriteTokens({ accessToken, refreshToken, isAdmin });
                window.location.reload();
              })
              .catch((err) => {
                history.push(!isAdmin ? ROUTES.ACCOUNT.LOGIN : ROUTES.ADMIN.LOGIN);
                reject(err);
              });
            break;
          }
          default: {
            reject(error.response?.data ?? error.response);
          }
        }
        reject(error.response.data);
      });
  });
