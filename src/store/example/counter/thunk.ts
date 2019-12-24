import { delay } from 'lib/util'

import { ThunkAction, ThunkDispatch, RootState } from 'store'

import * as action from './action'

export const increment = (amount: number): ThunkAction => async (dispatch: ThunkDispatch, getState: () => RootState): Promise<void> => {
  dispatch(action.increment(amount))
}

export const decrement = (amount: number): ThunkAction => async (dispatch: ThunkDispatch, getState: () => RootState): Promise<void> => {
  dispatch(action.decrement(amount))
}

export const delayedTwiceAdd = (amount: number): ThunkAction => async (dispatch: ThunkDispatch, getState: () => RootState): Promise<void> => {
  dispatch({ type: 'example/counter/thunk/DELAYED_TWICE_ADD', payload: { amount } }) // just redux history with custom type
  await delay(1000)
  dispatch(increment(amount)) // okay with thunk
  await delay(1000)
  dispatch(action.increment(amount)) // normally with action
}

// thunk super interface
const thunk = { increment, decrement, delayedTwiceAdd }
type Thunk = typeof thunk
export default Thunk
