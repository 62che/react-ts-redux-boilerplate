import { routerActions } from 'connected-react-router'

import { ThunkAction, ThunkDispatch, RootState } from 'store'

export const go = (n: number): ThunkAction => async (dispatch: ThunkDispatch, getState: () => RootState): Promise<void> => {
  dispatch(routerActions.go(n))
}

export const goBack = (): ThunkAction => async (dispatch: ThunkDispatch, getState: () => RootState): Promise<void> => {
  dispatch(routerActions.goBack())
}

export const goForward = (): ThunkAction => async (dispatch: ThunkDispatch, getState: () => RootState): Promise<void> => {
  dispatch(routerActions.goForward())
}

export const push = (path: string, state?: any): ThunkAction => async (dispatch: ThunkDispatch, getState: () => RootState): Promise<void> => {
  dispatch(routerActions.push(path, state))
}

export const replace = (path: string, state?: any): ThunkAction => async (dispatch: ThunkDispatch, getState: () => RootState): Promise<void> => {
  dispatch(routerActions.replace(path, state))
}

// thunk super interface
const thunk = { go, goBack, goForward, push, replace }
type Thunk = typeof thunk
export default Thunk
