import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { CounterState, CounterActionCreators, counterActionCreators } from '../store/module/counter'
import { RootState } from '../store'

// import http, { isAxiosError } from '../lib/http'
// import { AxiosError } from 'axios'

interface Props {
  counterState: CounterState
  counterDispatchers: CounterActionCreators
}

class ClassCounter extends React.Component<Props> {
  // async componentDidMount() {
  //   console.log('componentDidMount')
  //   try {
  //     const res = await http.get('http://google.com')
  //     console.log(res)
  //   } catch (error) {
  //     if(isAxiosError(error)) {
  //       const axiosError: AxiosError = error
  //       console.log(axiosError)
  //     }
  //   }
  // }

  render() {
    const { counterState, counterDispatchers } = this.props

    return (
      <div>
        <h1>Class Component</h1>
        <h2>{counterState.number}</h2>
        <button onClick={counterDispatchers.newIncrement}>+</button>
        <button onClick={counterDispatchers.newDecrement}>-</button>
        <button onClick={() => counterDispatchers.newIncrementBy(10)}>+10</button>
        <button onClick={counterDispatchers.newDelayedIncrementThunk}>*</button>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  counterState: state.counter
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  counterDispatchers: bindActionCreators(counterActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter)
