import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'

export const history = createHistory()

const store = configureStore(history)

export default store
