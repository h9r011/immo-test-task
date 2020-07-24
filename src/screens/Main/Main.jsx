import React from 'react';
import style from './Main.module.css';

const Main = () => {
  const caption = 'test task app';
  return (
    <div className={style.main}>
      <div>
        <div className={style.company}>IMMO</div>
        <div className={style.caption}>
          {Array.from(caption).map((letter) => {
            return <span>{letter}</span>
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;