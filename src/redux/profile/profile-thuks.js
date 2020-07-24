import * as profileAPI from './../../api/profile';
import {setUserProfile} from './profile-reducer';

export const fetchUserProfile = (id) => {
  return async (dispatch) => {
    const result = await profileAPI.getUserProfile(id);
    if (result.code === 0) {
      dispatch(setUserProfile(result.data.profile));
    }
  };
};