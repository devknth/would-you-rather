import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component {
  state = {
    show: false
  }

  componentWillMount () {
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  handleClick = (e) => {
    !this.node.contains(e.target) && this.setState({show: false})
  }

  toggleDropdown = () => {
    this.setState({show:!this.state.show})
  }

  login = (e) => {
    e.preventDefault()
    const authedUser = e.target.innerHTML
    this.props.dispatch(setAuthedUser(authedUser))
  }

  render () {
    return (
      <div className='login'>
        <span>
          Login with
        </span>
        <div className='dropdown' ref={node => this.node = node}>
          <button onClick={this.toggleDropdown} className='dropbtn'>Click</button>
          <div id='myDropdown' className={this.state.show ? 'dropdown-content show' : 'dropdown-content'}>
            <a onClick={this.login}>sarahedo</a>
            <a onClick={this.login}>tylermcginnis</a>
            <a onClick={this.login}>johndoe</a>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Login)