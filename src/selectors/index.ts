import { createSelector } from 'reselect'
import { filterTicketList, sortTicketList } from '../utils/ticketListTransformMethods'
import { AppState, Ticket } from '../types'

export const searchId = (state: AppState) => state.searchId.data.searchId

export const getVisibleTicketsAmount = (state: AppState) => state.visibleTicketsAmount.amount
export const getTickets = (state: AppState) => state.tickets.data
export const getSortingType = (state: AppState) => state.sortType.data
export const getFilterList = (state: AppState) => state.filter.data

export const getFilteredTickets = createSelector(
  getTickets,
  getFilterList,
  (data, filterList) => filterTicketList(data.tickets as Array<Ticket>, filterList)
)

export const getSortedTickets = createSelector(
  getFilteredTickets,
  getSortingType,
  (tickets , sortType) => sortTicketList(tickets, sortType)
)

export const getVisibleTickets = createSelector(
  getSortedTickets,
  getVisibleTicketsAmount,
  (tickets, amount) => tickets.slice(0, amount)
)
