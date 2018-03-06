import React from 'react'
import { Route } from 'react-router-dom'
import Chat from '../containers/Chat'

const App = () => (
  <main>
    <Route exact path='/' component={Chat} />
  </main>
)

export default App
