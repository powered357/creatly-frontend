import { endpoints } from 'API/endpoints';

import { makeRequest } from 'UTILS/makeRequest';

export const apiLogin = ({ email, password }) =>
  makeRequest('POST')(endpoints.login)({
    data: {
      email,
      password,
    },
  });

export const apiRegistration = ({ email, name, password }) =>
  makeRequest('POST')(endpoints.registration)({
    data: {
      email,
      name,
      password,
    },
  });

export const apiVerification = ({ code }) => makeRequest('POST')(endpoints.verification(code))();
