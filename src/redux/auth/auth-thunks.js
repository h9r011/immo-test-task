import {stopSubmit} from 'redux-form';
import * as authAPI from './../../api/auth';
import {clearAuthData, setAuthData} from './auth-reducer';

export const login = (data) => {
  return async (dispatch) => {
    const result = await authAPI.login(data);
    if (result.code === 0) {
      window.localStorage.setItem('id', String(result.data.id));
      window.localStorage.setItem('isAuth', String(1));
      dispatch(setAuthData(result.data));
    } else {
      let errorMessage = result.data.message || 'Something gone wrong :(';
      dispatch(stopSubmit('login', {_error: errorMessage}));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {

    const result = await authAPI.logout();
    if (result.code === 0) {

      window.localStorage.clear();
      dispatch(clearAuthData());
    }
  };
};