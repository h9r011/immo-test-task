const SET_NEWS = 'news/SET_NEWS';

let initialState = {
  list: []
};

const newsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEWS: {
      return {
        ...state,
        list: action.list
      }
    }
    default: {
      return state
    }
  }
};

export const setNews = (list) => ({type: SET_NEWS, list});

export default newsReducer;