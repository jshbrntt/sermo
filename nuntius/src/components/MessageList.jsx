import './MessageList.scss'
import React from 'react'
import classNames from 'classnames'

export function MessageList ({ messages }) {
  return (
    <ul className='MessageList'>
      {messages.map((message, index) => (
        <li className={classNames({
          ...message.metadata,
          them: 'id' in message,
          me: !('id' in message)
        })} key={index}>
          {message.metadata.think ? '🤔 ' + message.content : message.content}
        </li>
      ))}
    </ul>
  )
}
