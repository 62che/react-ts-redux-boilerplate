import React from 'react'
import { Route, Link } from 'react-router-dom'

import ClassCounter from './component/ClassCounter'
import FunctionalCounter from './component/FunctionalCounter'

const App: React.FC = () => (
  <>
    <div>Hello, world!</div>
    <ul>
      <li>
        <Link to="/class">Class</Link>
      </li>
      <li>
        <Link to="/functional">Functional</Link>
      </li>
    </ul>
    <Route path="/class" component={ClassCounter} />
    <Route path="/functional" component={FunctionalCounter} />
  </>
)

export default App
