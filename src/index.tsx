import React from 'react'
import ReactDOM from 'react-dom'

import Injector from 'Injector'
import App from 'App'

ReactDOM.render(
  <Injector>
    <App />
  </Injector>,
  document.getElementById('root')
)
