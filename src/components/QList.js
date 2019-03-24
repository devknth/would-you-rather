import React, { Component } from 'react'
import { connect } from 'react-redux'
import QCard from './QCard'

class QList extends Component {
  //click answer toggle
  
  render () {
    return (
      <div>
        <h3>Question List</h3>
        <ul>
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <QCard id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(QList)