import React from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './state'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import loggerMiddleware from './lib/loggerMiddleware'
import ClassCounter from './component/ClassCounter'
import FunctionalCounter from './component/FunctionalCounter'
// const w = window as any
// const devTools = w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()

const state = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware, ReduxThunk)))
// const state = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))

const App: React.FC = () => {
  return (
    <Provider store={state}>
      <div>
        Hello, world!
      </div>
      <ClassCounter />
      <FunctionalCounter />
    </Provider>
  )
}

export default App
