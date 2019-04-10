import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { removeAuthedUser } from '../actions/authedUser'
import LoadingBar from 'react-redux-loading'
import QDetail from './QDetail'
import QList from './QList'
import AddQ from './AddQ'
import Rank from './Rank'
import Login from './Login'
import Nav from './Nav'
import PageNotFound from './PageNotFound'
import { UNAUTHED } from '../actions/authedUser'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  logOut = () => {
    this.props.dispatch(removeAuthedUser())
  }

  render () {
    const { authedUser, loading } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
            <Nav />
            {loading === true
            ? null
            : authedUser === UNAUTHED
              ? 
              <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/add' exact component={Login} />
                <Route path='/questions/:id' exact component={Login} />
                <Route path='/leaderboard' exact component={Login} />
                <Route component={PageNotFound} />
              </Switch>
              : 
              <div className='container'>
                <h4 className='right'>
                  Hello, {authedUser}! <button onClick={this.logOut}>Log Out</button>
                </h4>
                <Switch>
                  <Route path='/' exact component={QList} />
                  <Route path='/add' exact component={AddQ} />
                  <Route path='/questions/:id' exact component={QDetail} />
                  <Route path='/leaderboard' exact component={Rank} />
                  <Route component={PageNotFound} />
                </Switch>
              </div>
            }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App)