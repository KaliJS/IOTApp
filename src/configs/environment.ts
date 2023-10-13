import { destroyCookie, parseCookies } from 'nookies';

export const getHost = () => {
  return 'https://apipath';
};

export const destroyToken = () => {
  localStorage.removeItem('token');
};
