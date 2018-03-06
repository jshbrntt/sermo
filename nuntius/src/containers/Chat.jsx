import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sendMessage, receiveMessage } from '../../store/modules/chat'
import io from 'socket.io-client'

class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.socket = io('http://localhost:3001')
    this.props.receiveMessage(this.socket)
  }
  render () {
    return (
      <section>
        <ul>
          {this.props.messages.map(message => (
            <li key={message.key}>
              [{message.key}]: {message.content} ({message.status})
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
      </section>
    )
  }
  handleChange (event) {
    this.setState({
      ...this.state,
      content: event.target.value
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    event.stopPropagation()
    this.props.sendMessage(this.socket, this.state.content)
  }
}

const mapStateToProps = state => {
  return state.chat
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendMessage,
      receiveMessage
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
