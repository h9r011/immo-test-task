import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/auth/auth-thunks';
import {getUserName, getUserAvatar} from '../../redux/profile/profile-selectors';
import Logo from './Logo/Logo';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import style from './Header.module.css';

const Header = ({userName, logout, userAvatar}) => {
  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <Logo companyName={'IMMO'}/>
        <ProfileMenu userName={userName || 'Shukhrat'} userAvatar={userAvatar} onLogout={logout}/>
      </div>
    </header>
  );
};

let mapStateToProps = (state) => ({
  userName: getUserName(state),
  userAvatar: getUserAvatar(state)
});

export default connect(mapStateToProps, {logout})(Header);