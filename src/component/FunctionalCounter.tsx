import React from 'react'
import { useSelector, shallowEqual /*, useDispatch*/ } from 'react-redux'

import { useDispatchers } from '../lib/hook'

import { RootState } from '../store'
import { counterActionCreators, CounterActionCreators } from '../store/module/counter'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    default: {},
    black: { backgroundColor: 'black', color: 'white' }
  })
)

const FunctionalCounter: React.FC = () => {
  const counterState = useSelector((state: RootState) => state.counter, shallowEqual)
  // const dispatch = useDispatch()
  // const { newIncrement, newDecrement, newDelayedIncrementThunk } = counterActionCreators
  const counterDispatchers: CounterActionCreators = useDispatchers(counterActionCreators)

  const styles = useStyles()

  return (
    <div>
      <h1>Functional Component</h1>
      <h2>{counterState.number}</h2>
      <button onClick={counterDispatchers.newIncrement}>+</button>
      <button onClick={counterDispatchers.newDecrement}>-</button>
      <Button onClick={() => counterDispatchers.newIncrementBy(10)} variant="contained" className={styles.black}>
        +10
      </Button>
      <button onClick={counterDispatchers.newDelayedIncrementThunk}>*</button>
    </div>
  )
}

export default FunctionalCounter
