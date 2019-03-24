import React, { Component } from 'react'
import { connect } from 'react-redux'

class QCard extends Component {
  //click vote card
  
  render () {
    const { author, optionOne, optionTwo } = this.props.question
    return (
      <div>
        <h4>Author: { author }</h4>
        <div>Option #1 - '{ optionOne.text }' ({optionOne.votes.length}) { optionOne.votes.indexOf(this.props.authedUser) > -1 ? '<< Your Pick!' : null }</div>
        <div>Option #2 - '{ optionTwo.text }' ({optionTwo.votes.length}) { optionTwo.votes.indexOf(this.props.authedUser) > -1 ? '<< Your Pick!' : null }</div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions }, { id }) {
  const question = questions[id]

  return { authedUser, question }
}
export default connect(mapStateToProps)(QCard)