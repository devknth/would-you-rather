import React, { Component } from 'react'
import { connect } from 'react-redux'
import QCard from './QCard'
import { setVoted } from '../actions/voted'
import { checkVoted } from '../utils/helpers'


class QList extends Component {
  handleChange = e => {
    const voted = e.target.innerHTML.toLowerCase() === 'voted'
    this.props.dispatch(setVoted(voted))
  }

  render () {
    const { authedUser, questions, voted } = this.props
    
    return (
      <div>
        <h3 className='center'>Question List</h3>
        <div className='right'>
          <span className={voted === false ? 'btn active' : 'btn'} onClick={this.handleChange}>Unvoted</span>
          <span className={voted === true ? 'btn active' : 'btn'} onClick={this.handleChange}>Voted</span>
        </div>
        <ul>
          {questions
            .map((question) => 
              checkVoted(question, authedUser) === voted
              ? 
              <li key={question.id}>
                <QCard id={question.id}/>
              </li>
              : ''
              )
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, voted }) {
  return {
    authedUser,
    voted,
    questions : Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
      .map(id => questions[id])
  }
}

export default connect(mapStateToProps)(QList)