export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER = 'ANSWER'

function receiveQuestion (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

function answer (authedUser, qid, answer) {
  return {
    type: ANSWER,
    authedUser,
    qid,
    answer
  }
}