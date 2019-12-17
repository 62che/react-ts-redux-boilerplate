import RootState from 'store/state'

import State from './state'

export const state = (rootState: RootState): State => rootState.example.counter

export const count = (rootState: RootState): number => state(rootState).count

// selector super interface
const selector = { state, count }
type Selector = typeof selector
export default Selector
