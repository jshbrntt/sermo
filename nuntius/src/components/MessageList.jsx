import './MessageList.scss'
import React from 'react'
import { Message } from './Message'

export function MessageList ({ messages }) {
  return (
    <div className='MessageList'>
      {messages.map((message, index) => (
        <Message message={message} />
      ))}
    </div>
  )
}
