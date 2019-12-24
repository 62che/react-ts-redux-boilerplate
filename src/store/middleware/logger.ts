import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux'
import RootState from '../state'

const logger: Middleware<any, RootState> = (store: MiddlewareAPI<Dispatch, RootState>) => (next: Dispatch<Action>) => (action: Action) => {
  // console.log('action', action)
  // console.log('before', store.getState())

  const result = next(action)

  // console.log('after', store.getState())
  // console.log('result', result)

  return result
}

export default logger
