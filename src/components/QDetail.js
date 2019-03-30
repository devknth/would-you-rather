import React, { Component } from 'react'
import { connect } from 'react-redux'

class QDetail extends Component {
  render ()  {
    const { author, optionOne, optionTwo } = this.props.question
    return (
      <div>
        <h1>Would You Rather?</h1>
        <br />
        <h4>Author: { author }</h4>
        <ul>
          <li>Option #1 - '{ optionOne.text }' ({optionOne.votes.length}) { optionOne.votes.indexOf(this.props.authedUser) > -1 ? '<< Your Pick!' : null }</li>
          <li>Option #2 - '{ optionTwo.text }' ({optionTwo.votes.length}) { optionTwo.votes.indexOf(this.props.authedUser) > -1 ? '<< Your Pick!' : null }</li>
        </ul>
      </div>
    )
  }
}


function mapStateToProps ({ authedUser, questions }, props) {
  const { id } = props.match.params
  const question = questions[id]

  return { authedUser, question }
}
export default connect(mapStateToProps)(QDetail)