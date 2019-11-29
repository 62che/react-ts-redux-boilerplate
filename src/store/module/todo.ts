import { action, ActionType, createReducer } from 'typesafe-actions'
import produce from 'immer'

interface TodoItem {
  id: number
  done: boolean
  name: string
}

const INSERT = 'todo/INSERT'
const REMOVE = 'todo/REMOVE'
const TOGGLE = 'todo/TOGGLE'

interface Insert {
  type: typeof INSERT
  payload: { name: string }
}

interface Remove {
  type: typeof REMOVE
  payload: { id: number }
}

interface Toggle {
  type: typeof TOGGLE
  payload: { id: number }
}

const newInsert = (name: string): Insert => action(INSERT, { name })
const newRemove = (id: number): Remove => action(REMOVE, { id })
const newToggle = (id: number): Toggle => action(TOGGLE, { id })

export const todoActionCreators = { newInsert, newRemove, newToggle }
export type TodoActionCreators = typeof todoActionCreators
export type TodoAction = ActionType<TodoActionCreators>

export interface TodoState {
  lastId: number
  todos: TodoItem[]
}

const initialState: TodoState = {
  lastId: 2,
  todos: [
    { id: 1, done: true, name: 'Todo 1' },
    { id: 2, done: false, name: 'Todo 2' }
  ]
}

const insertReducer = (state: TodoState, action: Insert) => {
  return produce(state, (draft: TodoState) => {
    draft.todos.push({ id: ++draft.lastId, done: false, name: action.payload.name })
  })
}

const removeReducer = (state: TodoState, action: Remove) => {
  return produce(state, (draft: TodoState) => {
    draft.todos = draft.todos.filter(todo => todo.id !== action.payload.id)
  })
}

const toggleReducer = (state: TodoState, action: Toggle) => {
  return produce(state, (draft: TodoState) => {
    const todo = draft.todos.find(todo => todo.id === action.payload.id)!
    todo.done = !todo.done
  })
}

export const todoReducer = createReducer<TodoState, TodoAction>(initialState)
  .handleType(INSERT, insertReducer)
  .handleType(REMOVE, removeReducer)
  .handleType(TOGGLE, toggleReducer)
