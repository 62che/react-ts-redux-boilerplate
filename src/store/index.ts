import { createStore, combineReducers, applyMiddleware, Store, Reducer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router'
import { History, createHashHistory } from 'history'

import logger from './middleware/logger'

import { counterReducer, CounterState } from './module/counter'
import { todoReducer, TodoState } from './module/todo'

const createRootReducer = (history: History): Reducer<RootState> =>
  combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    todo: todoReducer
  })

export const history: History = createHashHistory()
// export const history: History = createBrowserHistory()

const createRootStore = (): Store<RootState> => {
  const store = createStore(createRootReducer(history), composeWithDevTools(applyMiddleware(routerMiddleware(history), logger, ReduxThunk)))

  return store
}

const rootStore = createRootStore()

export default rootStore

export interface RootState {
  router: RouterState
  counter: CounterState
  todo: TodoState
}
