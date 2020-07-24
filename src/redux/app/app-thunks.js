import {setInitializingStatus} from './app-reducer';


export const initialize = () => {
  return (dispatch) => {
    if (localStorage.getItem('id')) {
      dispatch(setInitializingStatus(true));
    } else {

    }
  }
};