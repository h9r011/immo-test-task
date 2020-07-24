import {combineReducers, createStore, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile/profile-reducer';
import authReducer from './auth/auth-reducer';
import appReducer from './app/app-reducer'
import newsReducer from './news/news-reducer';

const reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  news: newsReducer,
  form: formReducer,
  app: appReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;