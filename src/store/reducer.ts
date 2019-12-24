import { combineReducers, Reducer } from 'redux'

import counterReducer from './example/counter/reducer'
import todoReducer from './example/todo/reducer'
import routerReducer from './router/reducer'

import RootState from './state'

const createRootReducer = (): Reducer<RootState> =>
  combineReducers({
    example: combineReducers({
      counter: counterReducer,
      todo: todoReducer
    }),
    router: routerReducer
  })

export default createRootReducer()
