export const getHost = () => {
  return 'https://apipath';
};

export const destroyToken = () => {
  localStorage.removeItem('token');
};
