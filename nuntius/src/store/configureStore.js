import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = (history, preloadedState = {}) => {
  const enhancers = []
  const middleware = [thunk, routerMiddleware(history)]

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}

export default configureStore
