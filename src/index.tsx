import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import store from 'store'
import { history } from 'store/router'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

if (process.env.NODE_ENV !== 'production') {
  console.log('Debug info : ___debug')
  console.log(process.env)
  ;(window as any).___debug = {
    store,
    history,
    env: process.env
  }
}

const globalTheme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    fontSize: 12
  }
})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
