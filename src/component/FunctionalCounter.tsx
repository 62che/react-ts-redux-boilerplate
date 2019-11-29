import React from 'react'
import { useSelector, shallowEqual/*, useDispatch*/ } from 'react-redux'

import { useDispatchers } from '../lib/hook'

import { RootState } from '../store'
import { counterActionCreators, CounterActionCreators } from '../store/module/counter'

const FunctionalCounter: React.FC = () => {
  const counterState = useSelector((state: RootState) => state.counter, shallowEqual)
  // const dispatch = useDispatch()
  // const { newIncrement, newDecrement, newDelayedIncrementThunk } = counterActionCreators
  const counterDispatchers: CounterActionCreators = useDispatchers(counterActionCreators)

  return (
    <div>
      <h1>Functional Component</h1>
      <h2>{counterState.number}</h2>
      <button onClick={counterDispatchers.newIncrement}>+</button>
      <button onClick={counterDispatchers.newDecrement}>-</button>
      <button onClick={() => counterDispatchers.newIncrementBy(10)}>+10</button>
      <button onClick={counterDispatchers.newDelayedIncrementThunk}>*</button>
    </div>
  )
}

export default FunctionalCounter
