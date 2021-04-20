import axios from 'axios';

// import { apiRefreshToken } from 'API/auth';

import { ROUTES } from 'CONSTANTS/routes';

import history from 'UTILS/history';
// import { getRefreshToken } from 'UTILS/getRefreshToken';
// import { getToken } from 'UTILS/getToken';
import { removeTokens } from 'UTILS/removeTokens';
// import { setTokens } from 'UTILS/setTokens';

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
        if (error?.response?.status === 401) {
          const isAdmin = error.config.url.includes('admins');

          console.log('response', error.config, { isAdmin });

          removeTokens(isAdmin);
          history.push(!isAdmin ? ROUTES.ACCOUNT.LOGIN : ROUTES.ADMIN.LOGIN);

          // TODO: implement refresh flow
          // apiRefreshToken({ token: getRefreshToken(isAdmin), isAdmin }).then((res) => {
          //   console.log('refresh response', { res });
          //   const { accessToken, refreshToken } = res.data;

          //   setTokens({ accessToken, refreshToken, isAdmin });
          //   retryRequest(error, resolve, reject);
          // });
        }
        reject(error.response);
      });
  });
