const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_SETTINGS = 'profile/SET_USER_SETTINGS';

let initialState = {
  user : {
    name: null,
    age: null,
    prof: null,
    avatar: null,
    hobbies: null,
    country: null,
    city: null
  },
  wall: [],
  UI: {}
};

const profileReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {
        ...state,
        user: action.profile
      };
    }
    case SET_USER_SETTINGS: {
      return {
        ...state,
        UI: action.settings
      }
    }
    default: {
      return state;
    }
  }
};

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;