import './index.scss'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './components/App'
import React from 'react'
import registerServiceWorker from './registerServiceWorker'
import store, { history } from './store'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
