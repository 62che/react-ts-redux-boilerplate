import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { increment, decrement, delayedIncrement } from '../state/counter'
// import * as counterActions from '../state/counter'
import { CounterState, CounterAction, actions, Actions } from '../state/counter'
import { RootState } from '../state'

interface Props {
  state: CounterState
  actions: Actions
}

class ClassCounter extends Component<Props> {
  render() {
    const { state, actions } = this.props
    return (
      <div>
        <h1>{state.number}</h1>
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
        <button onClick={actions.delayedIncrement}>*</button>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  // number: state.counter.number
  state: state.counter
})

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   actions: {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
//   }
// })
// const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ increment, decrement }, dispatch)
// const mapDispatchToProps = { increment, decrement, delayedIncrement }
const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassCounter)
