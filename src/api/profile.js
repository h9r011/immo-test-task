import {Auth, User} from '../model';

export const getUserProfile = (id) => {
  if (id === Auth.id) {
    return Promise.resolve({code: 0, data: {profile: User}});
  }

  return Promise.resolve({code: 1, data: {message: 'This user does not exist'}});
};