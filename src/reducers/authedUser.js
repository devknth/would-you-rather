import { SET_AUTHED_USER, REMOVE_AUTHED_USER, UNAUTHED } from '../actions/authedUser';

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return action.id
    case REMOVE_AUTHED_USER :
      return UNAUTHED
    default : 
      return state
  }
}