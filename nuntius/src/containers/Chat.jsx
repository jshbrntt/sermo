import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { MessageForm } from '../components/MessageForm'
import { MessageList } from '../components/MessageList'
import { inputChanged, clearInput } from '../actions/form'
import { sendMessage, receiveMessage } from '../actions/messages'
import io from 'socket.io-client'

class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.socket = io('http://localhost:3001')
    this.props.receiveMessage(this.socket)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render () {
    return (
      <section>
        <MessageList messages={this.props.messages} />
        <MessageForm input={this.props.form.input} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </section>
    )
  }
  handleChange (event) {
    this.props.inputChanged(event.target.value)
  }
  handleSubmit (event) {
    event.preventDefault()
    event.stopPropagation()
    this.props.sendMessage(this.socket, this.props.form.input)
    this.props.clearInput()
  }
}

const mapStateToProps = state => {
  return {
    form: state.form,
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendMessage,
      receiveMessage,
      inputChanged,
      clearInput
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
