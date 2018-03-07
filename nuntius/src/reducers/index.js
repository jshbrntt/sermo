import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import form from './form'
import messages from './messages'

export default combineReducers({
  routing: routerReducer,
  form,
  messages
})
