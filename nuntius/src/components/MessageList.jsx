import './MessageList.scss'
import React from 'react'

export function MessageList ({ messages }) {
  return (
    <ul className='MessageList'>
      {messages.map((message, index) => (
        <li key={index}>
          [{index}]: {message.content} ({message.status})
        </li>
      ))}
    </ul>
  )
}
