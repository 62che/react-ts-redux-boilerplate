import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { delay } from '../lib/util'

const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

// actions
export const increment = () => ({ type: INCREMENT })
// export const increment = createAction(INCREMENT, payload => payload)
// export const decrement = () => ({ type: DECREMENT })
export const decrement = createAction(DECREMENT)

export const delayedIncrement = () => async dispatch => {
  dispatch(increment())
  await delay(1000)
  dispatch(increment())
  await delay(1000)
  dispatch(increment())
}

const initialState = {
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
  [INCREMENT]: (state, action) => ({
    ...state,
    number: state.number + 1
  }),
  [DECREMENT]: (state, action) => produce(state, draft => {
    draft.number--
  })
}, initialState)
