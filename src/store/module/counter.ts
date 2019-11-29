import { Dispatch } from 'redux'
import { action, ActionType, createReducer } from 'typesafe-actions'
import produce from 'immer'

import { delay } from '../../lib/util'

const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'
const INCREMENTBY = 'counter/INCREMENTBY'

interface Increment {
  type: typeof INCREMENT
}

interface Decrement {
  type: typeof DECREMENT
}

interface IncrementBy {
  type: typeof INCREMENTBY
  payload: {
    value: number
  }
}

const newIncrement = (): Increment => action(INCREMENT)
const newDecrement = (): Decrement => action(DECREMENT)
const newIncrementBy = (value: number): IncrementBy => action(INCREMENTBY, { value: value })
const newDelayedIncrementThunk = () => async (dispatch: Dispatch): Promise<void> => {
  dispatch(newIncrement())
  await delay(1000)
  dispatch(newIncrement())
  await delay(1000)
  dispatch(newIncrement())
}

export const counterActionCreators = { newIncrement, newDecrement, newIncrementBy, newDelayedIncrementThunk }
export type CounterActionCreators = typeof counterActionCreators
export type CounterAction = ActionType<CounterActionCreators>

export interface CounterState {
  number: number
}

const initialState: CounterState = {
  number: 0
}

const incrementReducer = (state: CounterState, action: Increment) => {
  return { number: state.number + 1 }
}

const decrementReducer = (baseState: CounterState, action: Decrement) => {
  const nextState = produce(baseState, (draftState: CounterState): void => {
    draftState.number--
  })
  return nextState
}

const incrementByReducer = (baseState: CounterState, action: IncrementBy) => {
  const nextState = produce(baseState, (draftState: CounterState): void => {
    draftState.number += action.payload.value
  })
  return nextState
}

export const counterReducer = createReducer<CounterState, CounterAction>(initialState)
  .handleType(INCREMENT, incrementReducer)
  .handleType(DECREMENT, decrementReducer)
  .handleType(INCREMENTBY, incrementByReducer)
