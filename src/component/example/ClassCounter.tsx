import React from 'react'

import { delay } from 'lib/util'

interface Props {
  init: number
}

interface State {
  count: number
}

class ClassCounter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { count: props.init }
  }

  increment = (amount: number) => {
    this.setState((state: State, props: Props) => {
      return {
        count: state.count + amount
      }
    })
  }

  decrement = (amount: number) => this.setState(state => ({ count: state.count - amount }))

  delayedTwiceAdd = async (amount: number) => {
    this.increment(amount)
    await delay(1000)
    this.increment(amount)
  }

  render = () => (
    <div>
      <h1>Class Component</h1>
      <h2>{this.state.count}</h2>
      <button onClick={() => this.increment(1)}>+</button>
      <button onClick={() => this.decrement(1)}>-</button>
      <button onClick={() => this.delayedTwiceAdd(1)}>+1+1</button>
    </div>
  )
}

export default ClassCounter
