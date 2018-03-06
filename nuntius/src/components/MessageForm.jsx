import React from 'react'

export function MessageForm ({ input, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input value={input} type='text' onChange={onChange} />
      <button type='submit'>
        Send
      </button>
    </form>
  )
}
