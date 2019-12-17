import { action, ActionType } from 'typesafe-actions'

const INCREMENT = 'example/counter/INCREMENT'
const DECREMENT = 'example/counter/DECREMENT'

export interface Increment {
  type: typeof INCREMENT
  payload: {
    amount: number
  }
}

export interface Decrement {
  type: typeof DECREMENT
  payload: {
    amount: number
  }
}

const increment = (amount: number): Increment => action(INCREMENT, { amount })
const decrement = (amount: number): Decrement => action(DECREMENT, { amount })

// action name
export { INCREMENT, DECREMENT }
// action creator
export { increment, decrement }
// action super interface
const creator = { increment, decrement }
type Creator = typeof creator
type Action = ActionType<Creator>
export default Action
