import React, { Component } from 'react'
import { connect } from 'react-redux'
import RankCard from './RankCard'
import { getLength } from '../utils/helpers'

class Rank extends Component {
  render () {
    const { users } = this.props
    let rank = 0
    return (
      <div> 
        <h3 className='center'>Leader Board</h3>
        <ul>
        {
          users.map((user) => {
            rank = ++rank
            return (
              <li key={user.id}>
                <RankCard user={user} rank={rank}/>
              </li>
            )}
          )
        }
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users }) {
  return {
    questions,
    users : Object.keys(users)
      .sort(
        (a,b) => 
        (getLength(users[b].answers) + users[b].questions.length) - (getLength(users[a].answers) + users[a].questions.length)
      )
      .map(id => users[id])
  }
}

export default connect(mapStateToProps)(Rank)