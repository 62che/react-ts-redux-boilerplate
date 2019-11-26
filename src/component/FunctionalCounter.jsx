import React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { increment, decrement, delayedIncrement } from '../state/counter'

const FunctionalCounter = () => {
  const state = useSelector(state => state.counter, shallowEqual)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{state.number}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(delayedIncrement())}>*</button>
    </div>
  )
}

export default FunctionalCounter
