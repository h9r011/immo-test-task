import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Link.module.css';

const Link = ({href, label, onClick}) => {
  return (
    <div className={style.link} onClick={onClick}>
      <NavLink to={href}>{label}</NavLink>
    </div>
  );
};

export default Link;