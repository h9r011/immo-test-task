import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Logo.module.css'

const Logo = ({companyName}) => {
  return (
    <div className={style.logo}>
      <NavLink to='/'>
        <span className={style.logo__companyName}>
        {companyName}
          <sup className={style.logo__caption}>test task app</sup>
      </span>
      </NavLink>
    </div>
  );
};

export default Logo;