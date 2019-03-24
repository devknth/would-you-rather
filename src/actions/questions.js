export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER = 'ANSWER'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function answer (authedUser, qid, answer) {
  return {
    type: ANSWER,
    authedUser,
    qid,
    answer
  }
}