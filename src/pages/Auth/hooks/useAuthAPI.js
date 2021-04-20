import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { apiLogin, apiRegistration, apiVerification } from 'API/auth';

import { ROUTES } from 'CONSTANTS/routes';

import { getToken } from 'UTILS/getToken';
import { setTokens } from 'UTILS/setTokens';

export const useAuthAPI = (isAdmin) => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const loginRequest = async ({ email, password }) => {
    setLoading(true);
    clearServerError();

    const { data } = await apiLogin({ email, password, isAdmin });
    console.log('login data', data);
    const { accessToken, refreshToken } = data;

    setTokens({ accessToken, refreshToken, isAdmin });
  };

  const login = async ({ email, password }) => {
    await loginRequest({ email, password });
    const token = getToken(isAdmin);
    console.log({ token });
    // setTimeout(() => {

    history.replace(!isAdmin ? ROUTES.ROOT : ROUTES.ADMIN.MY_COURSES);
    // }, 1000)
  };

  const registerUser = ({ name, email, password }) => {
    setLoading(true);
    clearServerError();

    return apiRegistration({ name, email, password }).catch(catchError).finally(stopLoading);
  };

  const verifyUser = ({ code }) => {
    setLoading(true);
    clearServerError();

    return apiVerification({ code })
      .then(() => {
        // TODO: implement login on success
        history.push(ROUTES.ACCOUNT.LOGIN);
      })
      .catch(({ message }) => {
        catchError(message);
        history.push(ROUTES.ACCOUNT.LOGIN);
      })
      .finally(stopLoading);
  };

  const catchError = ({ message }) => setServerError(message);

  const stopLoading = () => setLoading(false);

  const clearServerError = useCallback(() => setServerError(''), []);

  return {
    login,
    registerUser,
    verifyUser,
    isLoading,
    serverError,
    clearServerError,
  };
};
