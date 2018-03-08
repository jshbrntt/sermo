import './App.scss'
import { Route } from 'react-router-dom'
import Chat from '../containers/Chat'
import React from 'react'

const App = () => (
  <main>
    <Route exact path='/' component={Chat} />
  </main>
)

export default App
