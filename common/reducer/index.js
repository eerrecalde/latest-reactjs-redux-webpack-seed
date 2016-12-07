import { combineReducers } from 'redux'
import counter from './counter'
import { routerReducer as router } from 'react-router-redux'

const rootReducer = combineReducers({
  router,
  counter
})

export default rootReducer
