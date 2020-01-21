import { Location } from 'lib/history'

import RootState from 'store/state'

import State from './state'

export const state = (rootState: RootState): State => rootState.router

export const location = (rootState: RootState): Location => state(rootState).location
// selector super interface
const selector = { state }
type Selector = typeof selector
export default Selector
