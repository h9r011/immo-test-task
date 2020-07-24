import React from 'react';
import Link from '../../common/Link/Link';
import defaultUserAvatar from '../../../assets/default-user-avatar.png';
import style from './ProfileMenu.module.css';

const ProfileMenu = ({userAvatar, userName, onLogout}) => {
  const [menuIsOpen, setMenuOpeningStatus] = React.useState(false);
  return (
    <div className={style.menu} onClick={() => {setMenuOpeningStatus(!menuIsOpen)}}>
      <div className={style.menu__avatar}>
        <img src={userAvatar || defaultUserAvatar} alt='avatar'/>
      </div>
      <span className={style.menu__userName}>{userName}</span>
      <div className={style.dropdown + ' ' + (menuIsOpen ? style.dropdown_show : style.dropdown_hide)}>
        <Link href='/' label='Logout' onClick={onLogout}/>
      </div>
    </div>
  );
};

export default ProfileMenu;