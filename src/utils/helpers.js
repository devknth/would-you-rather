export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function checkVoted (question, user) {
  return question.optionOne.votes.indexOf(user) > -1 || question.optionTwo.votes.indexOf(user) > -1
}
