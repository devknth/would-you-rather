import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLength } from '../utils/helpers'

class RankCard extends Component {
  render () {
    const { user, rank } = this.props
    return (
      <div className='question'> 
        <div>
          <h1>
            {rank}
          </h1>
        </div>
        <img
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
          className='avatar'
        />
        <div className='question-info'>
          <div>
            <span>
              { user.name }
            </span>
            <div>
              Total number of answers : { getLength(user.answers) }
            </div>
            <div>
              Total number of questions :  { user.questions.length }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({}, props) {
  const user = props.user
  const rank = props.rank
  return {
    user,
    rank
  }
}

export default connect(mapStateToProps)(RankCard)