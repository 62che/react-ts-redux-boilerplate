import { History as History_, createHashHistory, Location as Location_ } from 'history'

export type History = History_
export type Location = Location_

const history: History = createHashHistory()
// const history: History = createBrowserHistory()

export default history
