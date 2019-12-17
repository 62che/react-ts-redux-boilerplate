import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { useThunk } from 'lib/hook'

import * as counter from 'store/example/counter'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    default: {},
    black: { backgroundColor: 'black', color: 'white' }
  })
)

const FunctionalCounter: React.FC = () => {
  const counterState = useSelector(counter.selector.state, shallowEqual)
  const count = useSelector(counter.selector.count, shallowEqual)
  const counterThunk: counter.Thunk = useThunk(counter.thunk)

  const styles = useStyles()

  return (
    <div>
      <h1>Functional Component</h1>
      <h2>{counterState.count}</h2>
      <h2>{count}</h2>
      <button onClick={() => counterThunk.increment(1)}>+</button>
      <button onClick={() => counterThunk.decrement(1)}>+</button>
      <Button onClick={() => counterThunk.delayedTwice(1)} variant="contained" className={styles.black}>
        +1+1
      </Button>
    </div>
  )
}

export default FunctionalCounter
