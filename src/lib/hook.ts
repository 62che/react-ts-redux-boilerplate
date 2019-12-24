import { DependencyList } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

export const useThunk = (thunk: any, deps?: DependencyList) => {
  const dispatch = useDispatch()

  // // const dispatchers = {} as any
  // // Object.keys(actionCreators).forEach(actionName => {
  // //   dispatchers[actionName] = (...args: any[]) => dispatch(actionCreators[actionName](...args))
  // // })

  // return dispatchers

  // return useMemo(
  //   () => {
  //     if (Array.isArray(actionDispatcher)) {
  //       return actionDispatcher.map(a => bindActionCreators(a, dispatch))
  //     }
  //     return bindActionCreators(actionDispatcher, dispatch)
  //   },
  //   deps ? [dispatch, ...deps] : deps
  // )

  if (Array.isArray(thunk)) {
    return thunk.map(t => bindActionCreators(t, dispatch))
  }
  return bindActionCreators(thunk, dispatch)
}
