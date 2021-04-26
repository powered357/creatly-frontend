import Cookie from 'js-cookie';

export const setTokens = ({ accessToken, refreshToken, isAdmin }) => {
  if (isAdmin) {
    Cookie.set('adminToken', accessToken, { path: '' });
    Cookie.set('adminRefresh', refreshToken, { path: '' });
  } else {
    Cookie.set('token', accessToken, { path: '' });
    Cookie.set('refresh', refreshToken, { path: '' });
  }
};
