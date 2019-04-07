import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { UNAUTHED, setAuthedUser } from '../actions/authedUser'
import { setVoted } from '../actions/voted'
import { showLoading, hideLoading } from 'react-redux-loading'

const VOTED = false

export function handleInitialData () {
  return (dispatch)  => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(UNAUTHED))
        dispatch(setVoted(VOTED))
        dispatch(hideLoading())
      })
  }
}