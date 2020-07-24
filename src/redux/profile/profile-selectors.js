import {createSelector} from 'reselect';

export const getProfileData = (state) => state.profile;
export const getUserName = createSelector(getProfileData, (profile) => {
  return profile.user.name;
});
export const getUserAvatar = createSelector(getProfileData, (profile) => {
  return profile.user.avatar;
});
