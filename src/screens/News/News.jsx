import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchNews} from '../../redux/news/news-thunks';
import {getNewsList} from '../../redux/news/news-selectors';
import Post from '../../components/Post/Post';
import style from './News.module.css';

const News = ({news, fetchNews}) => {
  useEffect(() => {
    if (!news.length) {
      fetchNews();
    }
  });

  return (
    <div className={style.news}>
      {news.map((item) => <Post title={item.title} content={item.content}/>)}
    </div>
  );
};

let mapStateToProps = (state) => ({
  news: getNewsList(state)
});

export default connect(mapStateToProps, {fetchNews})(News);