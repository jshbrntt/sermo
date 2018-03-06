import React from 'react'

export function MessageForm ({ onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type='text' onChange={onChange} />
      <button type='submit'>
        Send
      </button>
    </form>
  )
}
