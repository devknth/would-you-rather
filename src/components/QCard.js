import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'

class QCard extends Component {
  //click vote card
  
  render () {
    const { optionOne, optionTwo, id, timestamp } = this.props.question
    const { name } = this.props.user
    return (
      <Link to={`/qdetail/${id}`} className='question'>
        <div className='question-info'>
          <div>
            <span>{name}</span>
            <div className='date'>{formatDate(timestamp)}</div>
            <button className='counter'> { optionOne.votes.length + optionTwo.votes.length } People voted</button>
            <p>
              { optionOne.text } vs { optionTwo.text } 
            </p>
          </div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }, { id }) {
  const question = questions[id]
  const user = users[question.author]

  return { authedUser, question, user }
}

export default withRouter(connect(mapStateToProps)(QCard))