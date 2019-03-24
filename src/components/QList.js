import React, { Component } from 'react'
import QCard from './QCard'

class QList extends Component {
  //click answer toggle
  
  render () {
    return (
      <div>
        <h1>Hello world! This is Question List.</h1>
        <QCard />
      </div>
    )
  }
}

export default QList