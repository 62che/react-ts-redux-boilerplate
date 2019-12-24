import { action, ActionType } from 'typesafe-actions'

const INSERT = 'example/todo/INSERT'
const REMOVE = 'example/todo/REMOVE'
const TOGGLE = 'example/todo/TOGGLE'

export interface Insert {
  type: typeof INSERT
  payload: { name: string }
}

export interface Remove {
  type: typeof REMOVE
  payload: { id: number }
}

export interface Toggle {
  type: typeof TOGGLE
  payload: { id: number }
}

const insert = (name: string): Insert => action(INSERT, { name })
const remove = (id: number): Remove => action(REMOVE, { id })
const toggle = (id: number): Toggle => action(TOGGLE, { id })

// action name
export { INSERT, REMOVE, TOGGLE }
// action creator
export { insert, remove, toggle }
// action super interface
const creator = { insert, remove, toggle }
type Creator = typeof creator
type Action = ActionType<Creator>
export default Action
