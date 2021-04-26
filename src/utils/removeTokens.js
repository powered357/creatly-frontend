import Cookie from 'js-cookie';

export const removeTokens = (isAdmin = false) => {
  if (isAdmin) {
    Cookie.remove('adminToken', { path: '' });
    Cookie.remove('adminRefresh', { path: '' });
  } else {
    Cookie.remove('token', { path: '' });
    Cookie.remove('refresh', { path: '' });
  }
};
