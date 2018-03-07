import './MessageForm.scss'
import React from 'react'

export function MessageForm ({ input, onSubmit, onChange }) {
  return (
    <form className='MessageForm' onSubmit={onSubmit}>
      <input placeholder='Type a message' value={input} type='text' onChange={onChange} />
      <button type='submit'>
        Send
      </button>
    </form>
  )
}
