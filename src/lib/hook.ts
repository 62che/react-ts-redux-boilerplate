import { useDispatch } from 'react-redux'

export const useDispatchers = (actionCreators: any) => {
  const dispatch = useDispatch()

  const dispatchers = {} as any
  Object.keys(actionCreators).forEach(actionName => {
    dispatchers[actionName] = (...args: any[]) => dispatch(actionCreators[actionName](...args))
  })

  return dispatchers
}
