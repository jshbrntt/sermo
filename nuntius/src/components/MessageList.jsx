import React from 'react'

export function MessageList ({ messages }) {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>
          [{index}]: {message.content} ({message.status})
        </li>
      ))}
    </ul>
  )
}
