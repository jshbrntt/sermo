import './Message.scss'
import React from 'react'
import classNames from 'classnames'

export function Message ({ message }) {
  return (
    <div className={classNames({
      Message: true,
      ...message.metadata,
      them: 'id' in message,
      me: !('id' in message)
    })}>
      {message.metadata.think ? '🤔 ' + message.content : message.content}
    </div>
  )
}
