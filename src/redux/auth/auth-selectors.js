export const getAuthData = (state) => ({
  id: state.auth.id || Number(window.localStorage.getItem('id')),
  isAuth: state.auth.isAuth
});