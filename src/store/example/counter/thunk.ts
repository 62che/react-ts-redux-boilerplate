import { delay } from 'lib/util'

import { ThunkAction, ThunkDispatch, GetStateFn } from 'store'

import * as action from './action'

export const increment = (amount: number): ThunkAction => async (dispatch: ThunkDispatch, getState: GetStateFn): Promise<void> => {
  dispatch(action.increment(amount))
}

export const decrement = (amount: number): ThunkAction => async (dispatch: ThunkDispatch, getState: GetStateFn): Promise<void> => {
  dispatch(action.decrement(amount))
}

export const delayedTwice = (amount: number): ThunkAction => async (dispatch: ThunkDispatch, getState: GetStateFn): Promise<void> => {
  dispatch({ type: 'custom/action/just/for/history', payload: { amount } })
  await delay(1000)
  dispatch(increment(amount)) // okay with thunk
  await delay(1000)
  dispatch(action.increment(amount)) // normally with action
}

// thunk super interface
const thunk = { increment, decrement, delayedTwice }
type Thunk = typeof thunk
export default Thunk
