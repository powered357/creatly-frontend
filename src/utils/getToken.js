import Cookie from 'js-cookie';

export const getToken = (isAdmin = false) => {
  if (isAdmin) {
    return Cookie.get('adminToken');
  }

  return Cookie.get('token');
};
