import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import QList from './QList'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <Fragment>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <QList />
        }
      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)