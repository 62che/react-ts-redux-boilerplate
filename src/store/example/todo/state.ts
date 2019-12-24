export interface TodoItem {
  id: number
  done: boolean
  name: string
}

export default interface TodoState {
  lastId: number
  todos: TodoItem[]
}

export const initialState: TodoState = {
  lastId: 2,
  todos: [
    { id: 1, done: true, name: 'Todo 1' },
    { id: 2, done: false, name: 'Todo 2' }
  ]
}
