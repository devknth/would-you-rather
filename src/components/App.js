import React, { Component } from 'react'
import QList from './QList'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <QList />
    )
  }
}

export default App