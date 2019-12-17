import CounterState from './example/counter/state'
import RouterState from './router/state'

export default interface RootState {
  example: {
    counter: CounterState
  }
  router: RouterState
}
