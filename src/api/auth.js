import {Auth} from './../model';

export const login = ({password, login}) => {
  if (password === Auth.password && login === Auth.login) {
    return Promise.resolve({code: 0, data: {id: Auth.id}})
  }
  return Promise.resolve({code: 1, data: {message: 'Incorrect password or login'}});
};

export const logout = () => {
  return Promise.resolve({code: 0});
};