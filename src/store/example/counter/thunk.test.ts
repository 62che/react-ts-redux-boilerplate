import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import { AnyAction } from 'redux'

import * as action from './action'
import * as thunk from './thunk'
import { initialState } from './state'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('counter thunk', () => {
  it('thunk.delayedTwiceAdd(1)', async () => {
    const store = mockStore({ example: { counter: initialState } })

    const expectedActions = [
      { type: 'example/counter/thunk/DELAYED_TWICE_ADD', payload: { amount: 1 } },
      action.increment(1),
      action.increment(1)
    ]

    await store.dispatch((thunk.delayedTwiceAdd(1) as unknown) as AnyAction)
    expect(store.getActions()).toEqual(expectedActions)
  })
})
