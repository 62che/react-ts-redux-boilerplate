import { connectRouter, RouterState } from 'connected-react-router'

import { history } from '.'

export default connectRouter<RouterState>(history)
