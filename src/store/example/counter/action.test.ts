import * as action from './action'

describe('counter action', () => {
  it('action.increment(1)', () => {
    const expectedAction: action.Increment = {
      type: action.INCREMENT,
      payload: {
        amount: 1
      }
    }

    expect(action.increment(1)).toEqual(expectedAction)
  })
})
