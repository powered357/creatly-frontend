import Cookie from 'js-cookie';

export const getToken = (isAdmin = false) => Cookie.get(isAdmin ? 'adminToken' : 'token');

export const getRefreshToken = (isAdmin = false) => Cookie.get(isAdmin ? 'adminRefresh' : 'refresh');

export const setTokens = ({ accessToken, refreshToken, isAdmin }) => {
  Cookie.set(isAdmin ? 'adminToken' : 'token', accessToken);
  Cookie.set(isAdmin ? 'adminRefresh' : 'refresh', refreshToken);
};

export const removeTokens = (isAdmin = false) => {
  Cookie.remove(isAdmin ? 'adminToken' : 'token');
  Cookie.remove(isAdmin ? 'adminRefresh' : 'refresh');
};

export const rewriteTokens = ({ accessToken, refreshToken, isAdmin }) => {
  removeTokens(isAdmin);
  setTokens({ accessToken, refreshToken, isAdmin });
};
