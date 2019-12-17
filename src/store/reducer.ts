import { combineReducers, Reducer } from 'redux'

import counterReducer from './example/counter/reducer'
import routerReducer from './router/reducer'

import RootState from './state'

const createRootReducer = (): Reducer<RootState> =>
  combineReducers({
    example: combineReducers({
      counter: counterReducer
    }),
    router: routerReducer,
  })

export default createRootReducer()
