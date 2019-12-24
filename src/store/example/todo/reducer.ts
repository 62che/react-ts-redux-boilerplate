import produce from 'immer'
import { createReducer } from 'typesafe-actions'

import State, { initialState } from './state'
// action interfaces
import Action, * as action from './action'

const insertReducer = (state: State, action: action.Insert) => {
  return produce(state, (draft: State) => {
    draft.todos.push({ id: ++draft.lastId, done: false, name: action.payload.name })
  })
}

const removeReducer = (state: State, action: action.Remove) => {
  return produce(state, (draft: State) => {
    draft.todos = draft.todos.filter(todo => todo.id !== action.payload.id)
  })
}

const toggleReducer = (state: State, action: action.Toggle) => {
  return produce(state, (draft: State) => {
    const todo = draft.todos.find(todo => todo.id === action.payload.id)!
    todo.done = !todo.done
  })
}

export default createReducer<State, Action>(initialState)
  .handleType(action.INSERT, insertReducer)
  .handleType(action.REMOVE, removeReducer)
  .handleType(action.TOGGLE, toggleReducer)
