import { useState, useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

import { apiLogin, apiRegistration, apiVerification } from 'API/auth';

import { ROUTES } from 'CONSTANTS/routes';

export const useAuthAPI = () => {
  const [, setCookie] = useCookies(['token, refresh']);
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const login = (isAdmin) => ({ email, password }) => {
    setLoading(true);
    clearServerError();

    return apiLogin({ email, password, isAdmin })
      .then(({ data }) => {
        const { accessToken, refreshToken } = data;

        setCookie(!isAdmin ? 'token' : 'adminToken', accessToken);
        setCookie(!isAdmin ? 'refresh' : 'adminRefresh', refreshToken);
      })
      .then(() => history.replace(!isAdmin ? ROUTES.ROOT : ROUTES.ADMIN.MY_COURSES))
      .catch(catchError)
      .finally(stopLoading);
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
