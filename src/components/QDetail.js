import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkVoted, formatDate } from '../utils/helpers'
import { answer } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import { addAnswerToUser } from '../actions/users'

class QDetail extends Component {
  state = {
    toHome: false
  }

  handleVote = (e) => {
    const value = e.target.value
    const { authedUser, question } = this.props
    
    Promise.all([
      this.props.dispatch(answer(authedUser, question.id, value)),
      this.props.dispatch(addAnswerToUser(authedUser, question.id, value))
    ]).then(() => {
      this.setState({toHome: true})
    })
  }

  render ()  {
    const { question, authedUser, isValidID } = this.props
    const { optionOne, optionTwo, timestamp } = question
    const { name, avatarURL } = this.props.user
    const { toHome } = this.state

    if (!isValidID) {
      return <Redirect to='/404' />
    }
    
    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className='option'>
        <h2>Would you rather?</h2>
        <img
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='question-info right'>
          <div>
            <span>{name}</span>
            <div className='date'>{formatDate(timestamp)}</div>
          </div>
        </div>
        {
          checkVoted(question, authedUser)
          ?
            <div className='vote_result'>
              <div>
                <h3 value='optionOne'>{ optionOne.text }</h3>
                <p>{optionOne.votes.length} votes</p>
                <p>
                { Math.round((optionOne.votes.length / (optionOne.votes.length + optionTwo.votes.length)) * 10000) / 100 }%
                </p>
                {
                  optionOne.votes.indexOf(authedUser) > -1 && <h5>Your Pick!</h5>
                }
              </div>
              <div>
                <h3 value='optionTwo'>{ optionTwo.text }</h3>
                <p>{optionTwo.votes.length} votes</p>
                <p>
                  { Math.round((optionTwo.votes.length / (optionOne.votes.length + optionTwo.votes.length)) * 10000) / 100 }%
                </p>
                {
                  optionTwo.votes.indexOf(authedUser) > -1 && <h5>Your Pick!</h5>
                }
              </div>
            </div>
              :
            <div>
              <button onClick={this.handleVote} value='optionOne'>{ optionOne.text }</button>
              <button onClick={this.handleVote} value='optionTwo'>{ optionTwo.text }</button>
            </div>
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
  const { id } = props.match.params
  const isValidID = typeof questions[id] != 'undefined'
  let question
  let user

  if (isValidID) {
    question = questions[id]
    user = users[question.author]

    return { authedUser, question, user, isValidID }
  }
  
  question = {}
  user = {}

  return { authedUser, question, user, isValidID }
}

export default connect(mapStateToProps)(QDetail)