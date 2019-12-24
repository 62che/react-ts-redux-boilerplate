import { History, createHashHistory, Location as Location_ } from 'history'
import { RouterState } from 'connected-react-router'

import * as selector from './selector'
import * as thunk from './thunk'

export type Location = Location_

const history: History = createHashHistory()
// const history: History = createBrowserHistory()

export { history }

export type State = RouterState

export type Selector = selector.default
export { selector }

export type Thunk = thunk.default
export { thunk }
