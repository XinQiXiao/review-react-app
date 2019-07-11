/**
 * create at 07/11/19
 */

import { combineReducers } from 'redux'
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})