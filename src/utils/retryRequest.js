import axios from 'axios';

import { getToken } from 'UTILS/manageTokens';

export const retryRequest = ({ error, resolve, reject, isAdmin }) => {
  const config = {
    ...error.config,
    headers: { ...error.config.headers, Authorization: `Bearer ${getToken(isAdmin)}` },
  };

  axios
    .request(config)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
};
