import React from 'react';
import defaultUserAvatar from '../../assets/default-user-avatar.png';
import style from './UserCard.module.css';

const UserCard = ({user}) => {
  return (
    <div className={style.userCard}>
      <div className={style.userCard__avatar}>
        <img src={user.avatar || defaultUserAvatar} alt='avatar'/>
      </div>
      <div className={style.userCard__info}>
        {
          Object.keys(user).map((key) => {
            return (key !== 'avatar') ? <p>{`${key}: ${user[key]}`}</p> : null;
          })
        }
      </div>
    </div>
  );
};

export default UserCard;
