import { SET_VOTED } from '../actions/voted';

export default function voted (state = null, action) {
  
  console.log('state = ', state)
  switch (action.type) {
    case SET_VOTED :
      return action.voted
    default : 
      return state
  }
}