import React, { Component } from 'react'
import { connect } from 'react-redux'
import QCard from './QCard'


function toggleQList (e) {
  console.log(e.target.innerHTML.toLowerCase())
}

class QList extends Component {

  
  render () {
    return (
      <div>
        <h3>Question List</h3>
        <div className='nav'>
          <ul>
            <li activeClassName='active' onClick={e => toggleQList(e)}>Unvoted</li>
            <li activeClassName='active' onClick={e => toggleQList(e)}>Voted</li>
          </ul> 
        </div>
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