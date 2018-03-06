import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import chat from './chat'

export default combineReducers({
  routing: routerReducer,
  chat
})
