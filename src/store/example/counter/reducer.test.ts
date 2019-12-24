import reducer from './reducer'
import * as action from './action'
import State, { initialState } from './state'

describe('counter reducer', () => {
  it('handle action.increment(1)', () => {
    const expectedState: State = {
      count: 1
    }

    expect(reducer(initialState, action.increment(1))).toEqual(expectedState)
  })
})
