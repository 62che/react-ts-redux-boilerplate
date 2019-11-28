import React from 'react'

import ClassCounter from './component/ClassCounter'
import FunctionalCounter from './component/FunctionalCounter'

const App: React.FC = () => (
  <>
    <div>
      Hello, world!
    </div>
    <ClassCounter />
    <FunctionalCounter />
  </>
)

export default App
