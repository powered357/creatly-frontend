import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { apiLogin, apiRegistration, apiVerification } from 'API/auth';

import { ROUTES } from 'CONSTANTS/routes';

import { setErrorMsg } from 'STORE/notifications';

import { setTokens } from 'UTILS/setTokens';

export const useAuthAPI = (isAdmin) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const loginRequest = async ({ email, password }) => {
    setLoading(true);
    clearServerError();

    const { data } = await apiLogin({ email, password, isAdmin });
    const { accessToken, refreshToken } = data;

    setTokens({ accessToken, refreshToken, isAdmin });
    return data;
  };

  const login = async ({ email, password }) => {
    try {
      await loginRequest({ email, password });

      history.replace(!isAdmin ? ROUTES.ROOT : ROUTES.ADMIN.MY_COURSES);
    } catch (err) {
      dispatch(setErrorMsg(err));
      setLoading(false);
    }
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
