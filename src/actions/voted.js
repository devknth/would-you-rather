export const SET_VOTED = 'SET_VOTED'

export function setVoted (voted) {
  return {
    type: SET_VOTED,
    voted
  }
}