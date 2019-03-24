import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _getUsers, _getQuestions } from '../utils/_DATA'

const AUTHED_ID = 'sarahedo'

export function handleInitialData () {
  return (dispatch)  => {
    dispatch(showLoading())
    return new Promise ((res, rej) => {
      const users = _getUsers()
      const questions = _getQuestions()
      return res = { users, questions }
    }).then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}