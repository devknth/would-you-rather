import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class AddQ extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }
  handleChange1 = (e) => {
    const optionOneText = e.target.value

    this.setState(() => ({
      optionOneText
    }))
  }
  handleChange2 = (e) => {
    const optionTwoText = e.target.value

    this.setState(() => ({
      optionTwoText
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch, authedUser } = this.props
    const question = {
      optionOneText,
      optionTwoText,
      author: authedUser
    }

    dispatch(handleAddQuestion(question))

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true
    }))
  }

  render () {
    const { authedUser } = this.props
    const { text, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }
    
    return (
      <div className='option'>
        <h2>Would you rather?</h2>
        <form className='new-question' onSubmit={this.handleSubmit}>
        <div className='question-info right'>
          <div>
            <span>{authedUser}</span>
          </div>
        </div>
          <textarea
            placeholder="Option One : "
            value={text}
            onChange={this.handleChange1}
            className='textarea'
            maxLength={280}
          />
          <br />
           vs
          <br />
          <br />
          <textarea
            placeholder="Option Two : "
            value={text}
            onChange={this.handleChange2}
            className='textarea'
            maxLength={280}
          />
          <button>Submit</button>
          </form>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(AddQ)