import { Dispatch } from 'redux'

import * as action from './action'

export const insert = (name: string) => async (dispatch: Dispatch): Promise<void> => {
  dispatch(action.insert(name))
}

export const remove = (id: number) => async (dispatch: Dispatch): Promise<void> => {
  dispatch(action.remove(id))
}

export const toggle = (id: number) => async (dispatch: Dispatch): Promise<void> => {
  dispatch(action.toggle(id))
}

// thunk super interface
const thunk = { insert, remove, toggle }
type Thunk = typeof thunk
export default Thunk
