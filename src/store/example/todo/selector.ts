import RootState from 'store/state'

import State, { TodoItem } from './state'

export const state = (rootState: RootState): State => rootState.example.todo

export const todos = (rootState: RootState): TodoItem[] => state(rootState).todos

// selector super interface
const selector = { state, todos }
type Selector = typeof selector
export default Selector
