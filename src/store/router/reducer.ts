import { connectRouter } from 'connected-react-router'

import RouterState from './state'
import { history } from '.'

const reducer = connectRouter<RouterState>(history)

export default reducer
