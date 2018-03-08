import './MessageList.scss'
import React from 'react'
import { Message } from '../components/Message'

export class MessageList extends React.Component {
  scrollToBottom () {
    this.refs.scrollable.scrollTop = this.refs.scrollable.offsetHeight
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props.messages.length !== prevProps.messages.length) {
      this.scrollToBottom()
    }
  }
  componentDidMount () {
    this.scrollToBottom()
  }
  render () {
    return (
      <div className='MessageList'>
        <div ref='scrollable' className='List'>
          <div className='Messages'>
            {this.props.messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
