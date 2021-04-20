import axios from 'axios';

export const retryRequest = (error, resolve, reject) => {
  const config = {
    ...error.config,
    headers: { ...error.config.headers, Authorization: `Bearer ${getToken()}` },
  };

  axios
    .request(config)
    .then((response) => resolve(response.data))
    .catch((err) => reject(err));
};
