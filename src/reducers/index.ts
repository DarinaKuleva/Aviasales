import { combineReducers } from 'redux'
import searchId from './searchId'
import tickets from './tickets'
import sortType from './sorting'
import filter from './filter'

const rootReducer = combineReducers({
  searchId,
  tickets,
  sortType,
  filter
})

export default rootReducer
