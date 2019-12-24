import configureMockStore from 'redux-mock-store'

import RootState from '../../state'
import State, { initialState } from './state'
import * as selector from './selector'

const mockStore = configureMockStore()

describe('counter selector', () => {
  it('selector.state', () => {
    const store = mockStore({ example: { counter: initialState } })
    const rootState = store.getState() as RootState

    const expectedState: State = {
      count: 0
    }

    expect(selector.state(rootState)).toEqual(expectedState)
  })

  it('selector.count', () => {
    const store = mockStore({ example: { counter: initialState } })
    const rootState = store.getState() as RootState

    const expectedState: State = {
      count: 0
    }

    expect(selector.count(rootState)).toEqual(expectedState.count)
  })
})
