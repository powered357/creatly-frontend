import Cookie from 'js-cookie';

export const getRefreshToken = (isAdmin = false) => {
  if (isAdmin) {
    return Cookie.get('adminRefresh');
  }

  return Cookie.get('refresh');
};
