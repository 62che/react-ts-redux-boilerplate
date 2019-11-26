import { Middleware, MiddlewareAPI, Dispatch, Action, AnyAction } from 'redux'
import { RootState } from '../state'

// const loggerMiddleware: Middleware = (store) => (next) => (action) => {
const loggerMiddleware: Middleware = (store: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => (next: Dispatch<AnyAction>) => (action: Action) => {
    console.log('before', store.getState())
  console.log(action)

  const result = next(action)

  console.log('after', store.getState())
  console.log(result)

  return result
}

// const loggerMiddleware = <S>() => {
//   return (): Middleware<{}, S> => <S>(store: MiddlewareAPI<Dispatch<AnyAction>, S>) => (next: Dispatch<AnyAction>) => (action: Action) => {
//     console.log('before', store.getState())
//     console.log(action)

//     const result = next(action)

//     console.log('after', store.getState())
//     console.log(result)

//     return result
//   }
// }

export default loggerMiddleware
