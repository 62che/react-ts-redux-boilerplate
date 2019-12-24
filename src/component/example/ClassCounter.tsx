import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import RootState from 'store/state'
import * as counter from 'store/example/counter'

interface Props {
  counterState: counter.State
  count: number
  counterThunk: counter.Thunk
}

class ClassCounter extends React.Component<Props> {
  render() {
    const { counterState, count, counterThunk } = this.props

    return (
      <div>
        <h1>Class Component</h1>
        <h2>{counterState.count}</h2>
        <h2>{count}</h2>
        <button onClick={() => counterThunk.increment(1)}>+</button>
        <button onClick={() => counterThunk.decrement(1)}>-</button>
        <button onClick={() => counterThunk.delayedTwiceAdd(1)}>+1+1</button>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  counterState: counter.selector.state(state),
  count: counter.selector.count(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  counterThunk: bindActionCreators(counter.thunk, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter)
