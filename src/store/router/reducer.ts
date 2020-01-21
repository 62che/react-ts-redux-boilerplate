import { connectRouter } from 'connected-react-router'

import history from 'lib/history'

const reducer = connectRouter(history)

export default reducer
