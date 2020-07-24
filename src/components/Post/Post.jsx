import React from 'react';
import style from './Post.module.css';

const Post = ({title, content}) => {
  return (
    <div className={style.post}>
      <h2 className={style.post__title}>{title}</h2>
      <div className={style.post__content}>{content}</div>
    </div>
  );
};

export default Post;