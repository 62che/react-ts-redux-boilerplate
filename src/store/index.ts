import { createStore, applyMiddleware, AnyAction } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import { ThunkAction as ThunkAction_, ThunkDispatch as ThunkDispatch_ } from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'

import logger from './middleware/logger'

import { history } from './router'
import rootReducer from './reducer'
import * as state from './state'

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(routerMiddleware(history), logger, ReduxThunk)))

export type RootState = state.default

type ExtraArg = undefined
export type ThunkAction = ThunkAction_<Promise<void>, RootState, ExtraArg, AnyAction>
export type ThunkDispatch = ThunkDispatch_<RootState, ExtraArg, AnyAction>
