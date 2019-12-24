import React from 'react'
import ReactDOM from 'react-dom'

import Injector from './Injector'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Injector>
      <App />
    </Injector>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
