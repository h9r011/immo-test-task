import * as newsAPI from './../../api/news';
import {setNews} from './news-reducer';

export const fetchNews = () => {
  return async (dispatch) => {
    const result = await newsAPI.getNews();
    if (result.code === 0) {
      dispatch(setNews(result.data));
    }
  };
};