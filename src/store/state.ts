import CounterState from './example/counter/state'
import TodoState from './example/todo/state'
import RouterState from './router/state'

export default interface RootState {
  example: {
    counter: CounterState
    todo: TodoState
  }
  router: RouterState
}
