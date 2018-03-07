import './MessageList.scss'
import React from 'react'

export function MessageList ({ messages }) {
  return (
    <ul className='MessageList'>
      {messages.map((message, index) => (
        <li className={message.status === 'received' ? 'them' : 'me'} key={index}>
          [{index}]: {message.content} ({message.status})
        </li>
      ))}
    </ul>
  )
}
