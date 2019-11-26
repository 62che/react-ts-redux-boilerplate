import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { increment, decrement, delayedIncrement } from '../state/counter'
import * as counterActions from '../state/counter'

class ClassCounter extends Component {
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

const mapStateToProps = state => ({
  // number: state.counter.number
  state: state.counter
})

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
// const mapDispatchToProps = dispatch => bindActionCreators({ increment, decrement }, dispatch)
// const mapDispatchToProps = { increment, decrement, delayedIncrement }
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(counterActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassCounter)
