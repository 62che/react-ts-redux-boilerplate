import React from 'react'
import { Route } from 'react-router-dom'

import Main from 'component/page/Main'
import Other from 'component/page/Other'

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route path="/other" component={Other} />
    </>
  )
}

export default App
