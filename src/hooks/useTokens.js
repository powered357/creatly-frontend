import { useCookies } from 'react-cookie';

export const useTokens = (isAdmin = false) => {
  const [, setCookie, removeCookie] = useCookies(['token', 'refresh', 'adminToken', 'adminRefresh']);

  const setTokens = ([accessToken, refreshToken]) => {
    setCookie(!isAdmin ? 'token' : 'adminToken', accessToken);
    setCookie(!isAdmin ? 'refresh' : 'adminRefresh', refreshToken);
  };

  const removeTokens = () => {
    removeCookie(!isAdmin ? 'token' : 'adminToken');
    removeCookie(!isAdmin ? 'refresh' : 'adminRefresh');
  };

  return {
    setTokens,
    removeTokens,
  };
};
