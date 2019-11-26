import { action } from 'typesafe-actions'
import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { delay } from '../lib/util'
import { Dispatch } from 'redux'

const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

// actions
// export const increment = () => ({ type: INCREMENT })
// export const increment = createAction(INCREMENT, payload => payload)
// export const decrement = () => ({ type: DECREMENT })
// export const decrement = createAction(DECREMENT)
export const increment = () => action(INCREMENT)
export const decrement = () => action(DECREMENT)

export const delayedIncrement = () => async (dispatch: Dispatch) => {
  dispatch(increment())
  await delay(1000)
  dispatch(increment())
  await delay(1000)
  dispatch(increment())
}

export interface CounterState {
  number: number
}

const initialState: CounterState = {
  number: 0
}

// reducers
// export default function counter(state = initialState, action: any) {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         number: state.number + 1
//       }
//     case DECREMENT:
//         return {
//           ...state,
//           number: state.number - 1
//         }
//     default:
//       return state
//   }
// }
export default handleActions({
  [INCREMENT]: (state, action): CounterState => ({
    ...state,
    number: state.number + 1
  }),
  [DECREMENT]: (state, action): CounterState => produce(state, (draft: CounterState) => {
    draft.number--
  })
}, initialState)
