import { createStore, applyMiddleware, AnyAction } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import { ThunkAction as TA, ThunkDispatch as TD } from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'

import logger from './middleware/logger'

import { history } from './router'
import rootReducer from './reducer'
import * as rootState from './state'

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(routerMiddleware(history), logger, ReduxThunk)))

export type RootState = rootState.default
export type GetStateFn = () => RootState

type ExtraArg = undefined
export type ThunkAction = TA<Promise<void>, RootState, ExtraArg, AnyAction>
export type ThunkDispatch = TD<RootState, ExtraArg, AnyAction>
