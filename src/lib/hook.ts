import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'

export const useThunk = (thunk: any) => {
  const dispatch = useDispatch()

  if (Array.isArray(thunk)) {
    return thunk.map(t => bindActionCreators(t, dispatch))
  }
  return bindActionCreators(thunk, dispatch)
}
