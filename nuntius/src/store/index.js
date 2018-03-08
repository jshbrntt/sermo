import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import { loadState, saveState } from './localStorage'

export const history = createHistory()

const persistedState = loadState()

const store = configureStore(history, persistedState)

store.subscribe(() => {
  let state = store.getState()
  saveState({
    messages: state.messages.slice(-10), // Last ten messages
    nicknames: state.nicknames
  })
})

export default store
