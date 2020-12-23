import { createStore, applyMiddleware } from 'redux'
import reduxCatch from 'redux-catch'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

import todoApp from '../reducers/index.jsx'
//import initialState from '../reducers/initialState.jsx'

function errorHandler(error, getState, lastAction, dispatch) {
  console.error(error)
  console.debug('current state', getState())
  console.debug('last action was', lastAction)
}
let Middleware = applyMiddleware(
	reduxCatch(errorHandler),
	logger,
	promise()
);
//export default createStore(todoApp,initialState,Middleware)
export default createStore(todoApp,Middleware)