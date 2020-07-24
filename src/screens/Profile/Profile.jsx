import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {fetchUserProfile} from '../../redux/profile/profile-thuks';
import {getProfileData} from '../../redux/profile/profile-selectors';
import withAuth from '../../HOCs/withAuth';
import UserCard from '../../components/UserCard/UserCard';
import style from './Profile.module.css';


const Profile = ({auth, profile, fetchUserProfile}) => {
  React.useEffect(() => {
    if (!profile.user.name) {
      fetchUserProfile(auth.id);
    }
  });
  return (
    <div className={style.profile}>
      <UserCard user={profile.user}/>
    </div>
  );
};

let mapStateToProps = (state) => ({
  profile: getProfileData(state)
});

export default compose(connect(mapStateToProps, {fetchUserProfile}), withAuth)(Profile);