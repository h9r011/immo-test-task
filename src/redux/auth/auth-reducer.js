const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const CLEAR_AUTH_DATA = 'auth/CLEAR_AUTH_DATA';

let initialState = {
  isAuth: false,
  id: null
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        isAuth: true,
        id: action.id
      }
    }
    case CLEAR_AUTH_DATA: {
      return {
        isAuth: false,
        id: null
      }
    }
    default: {
      return state
    }
  }
};

export const setAuthData = (id) => ({type: SET_AUTH_DATA, id});
export const clearAuthData = () => ({type: CLEAR_AUTH_DATA});

export default authReducer;