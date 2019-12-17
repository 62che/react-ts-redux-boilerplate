import produce from 'immer'
import { createReducer } from 'typesafe-actions'

import State, { initialState } from './state'
// action names
import { INCREMENT, DECREMENT } from './action'
// action interfaces
import Action, { Increment, Decrement } from './action'

const incrementReducer = (state: State, action: Increment) => {
  return produce(state, (draft: State): void => {
    draft.count += action.payload.amount
  })
}

const decrementReducer = (state: State, action: Decrement) => {
  return produce(state, (draft: State): void => {
    draft.count -= action.payload.amount
  })
}

export default createReducer<State, Action>(initialState)
  .handleType(INCREMENT, incrementReducer)
  .handleType(DECREMENT, decrementReducer)
