import './MessageList.scss'
import React from 'react'
import { Message } from './Message'

export class MessageList extends React.Component {
  constructor (props) {
    super(props)
    this.onScroll = this.onScroll.bind(this)
  }
  onScroll (event) {
    console.log(this.refs.elem.scrollTop)
  }
  scrollToBottom () {
    this.refs.elem.scrollTop = this.refs.elem.offsetHeight
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props.messages.length !== prevProps.messages.length) {
      this.scrollToBottom()
    }
  }
  render () {
    return (
      <div ref='elem' className='MessageList' onScroll={this.onScroll}>
        <div className='Messages'>
          {this.props.messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
      </div>
    )
  }
}
