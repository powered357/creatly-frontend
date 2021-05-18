import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactGA from 'react-ga';

import { apiLogin, apiRegistration, apiVerification } from 'API/auth';

import { ROUTES } from 'CONSTANTS/routes';
import { ERROR_MESSAGES } from 'CONSTANTS/errorMessages';

import { clearErrorMsg, setErrorMsg } from 'STORE/notifications';

import { rewriteTokens } from 'UTILS/manageTokens';

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

    rewriteTokens({ accessToken, refreshToken, isAdmin });

    ReactGA.event({
      category: 'User',
      action: 'Login',
      transport: 'beacon',
    });
  };

  const login = async ({ email, password }) => {
    try {
      await loginRequest({ email, password });

      history.replace(!isAdmin ? ROUTES.ROOT : ROUTES.ADMIN.MY_COURSES);
    } catch (err) {
      notifyForError(err);
    } finally {
      stopLoading();
    }
  };

  const registerUser = ({ name, email, password }) => {
    setLoading(true);
    clearServerError();

    return apiRegistration({ name, email, password }).catch(notifyForError).finally(stopLoading);
  };

  const verifyUser = ({ code }) => {
    setLoading(true);
    clearServerError();

    return apiVerification({ code })
      .then(() => {
        ReactGA.event({
          category: 'User',
          action: 'Verification',
          transport: 'beacon',
          value: `Verification code: ${code}`,
        });
      })
      .catch(({ message }) => {
        catchError(message);
        history.push(ROUTES.ACCOUNT.LOGIN);
      })
      .finally(stopLoading);
  };

  const catchError = ({ message }) => setServerError(message);

  const notifyForError = ({ message }) => {
    const payload = { message: ERROR_MESSAGES[message] ? ERROR_MESSAGES[message] : 'Ошибка на сервере' };

    dispatch(clearErrorMsg());
    dispatch(setErrorMsg(payload));
  };

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
