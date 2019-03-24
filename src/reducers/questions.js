import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
      case ADD_QUESTION :
      return {
        ...state, 
        [action.question.id]: action.question,
      }
      case ANSWER :
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }
      
      questions = {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
      return { users, questions } 
    default :
      return state
  }
}