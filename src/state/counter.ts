import { action, ActionType, createReducer } from 'typesafe-actions'
import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { delay } from '../lib/util'
import { Dispatch, Action } from 'redux'

const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

interface IncrementAction {
  type: typeof INCREMENT
}

interface DecrementAction {
  type: typeof DECREMENT
}

export type Actions2 = IncrementAction | DecrementAction

// actions
// export const increment = () => ({ type: INCREMENT })
// export const increment = createAction(INCREMENT, payload => payload)
// export const increment = createAction(INCREMENT)
// export const decrement = () => ({ type: DECREMENT })
// export const decrement = createAction(DECREMENT)
export const increment = (): IncrementAction => action(INCREMENT)
export const decrement = (): DecrementAction => action(DECREMENT)

export const delayedIncrement = () => async (dispatch: Dispatch) => {
  dispatch(increment())
  await delay(1000)
  dispatch(increment())
  await delay(1000)
  dispatch(increment())
}

export const actions = { increment, decrement, delayedIncrement }
export type CounterAction = ActionType<typeof actions>
export type Actions = typeof actions
export type Actions3 = ReturnType<typeof increment | typeof decrement>

export interface CounterState {
  number: number
}

const initialState: CounterState = {
  number: 0
}

// reducers
// export default function counter(state: CounterState = initialState, action: Actions2) {
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
// export default handleActions<CounterState, Actions2>({
//   [INCREMENT]: (state, action): CounterState => ({
//     ...state,
//     number: state.number + 1
//   }),
//   [DECREMENT]: (state, action): CounterState => produce(state, (draft: CounterState) => {
//     draft.number--
//   })
// }, initialState)
const counter = createReducer<CounterState, Actions2>(initialState)
  .handleType(INCREMENT, (state, action) => ({ number: state.number + 1 }))
  .handleType(DECREMENT, (state, action) => produce(state, (draft: CounterState) => { draft.number-- }))

export default counter
