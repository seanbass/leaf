import { types } from './user.actions';

const initialState = {
  profile: 'locked'
};

export default function userReducer(state=initialState, action={}) {
  switch(action.type) {
    case types.PROFILE.EDIT:
        return {
            ...state,
            profile: 'editing'
        }
    case types.PROFILE.LOCK:
        return {
            ...state,
            profile: 'locked',
        };
    default:
      return state;
  }
}