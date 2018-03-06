import createHistory from 'history/createBrowserHistory'
import configureStore from 'configureStore'

export const history = createHistory()

export default configureStore(history)
