import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from './store'

if (process.env.NODE_ENV !== 'production') {
  console.log('Debug info : ___debug')
  console.log(process.env)
  ;(window as any).___debug = {
    store,
    history,
    env: process.env
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
