import { combineReducers } from 'redux'
import searchId from './searchId'
import tickets from './tickets'
import sortType from './sorting'
import filter from './filter'
import visibleTicketsAmount from './visibleTicketsAmount'

const rootReducer = combineReducers({
  searchId,
  tickets,
  sortType,
  filter,
  visibleTicketsAmount
})

export default rootReducer
