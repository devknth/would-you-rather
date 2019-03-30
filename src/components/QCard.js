import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class QCard extends Component {
  //click vote card
  
  render () {
    const { author, optionOne, optionTwo, id } = this.props.question
    return (
      <Link to={`/qdetail/${id}`}>
        <div>
          <h4>Author: { author }</h4>
          <ul>
            <li>Option #1 - '{ optionOne.text }' ({optionOne.votes.length}) { optionOne.votes.indexOf(this.props.authedUser) > -1 ? '<< Your Pick!' : null }</li>
            <li>Option #2 - '{ optionTwo.text }' ({optionTwo.votes.length}) { optionTwo.votes.indexOf(this.props.authedUser) > -1 ? '<< Your Pick!' : null }</li>
          </ul>
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({ authedUser, questions }, { id }) {
  const question = questions[id]

  return { authedUser, question }
}
export default withRouter(connect(mapStateToProps)(QCard))