import { SEGMENT_AMOUNT } from '../constants'
import { FilterOptions, SortOptions } from '../models'
import { Ticket } from '../types'

export const filterTicketList = (tickets: Array<Ticket>, filterList: Array<FilterOptions>): Array<Ticket> => {
  if (filterList && (!filterList.length || filterList.some(filter => filter === FilterOptions.All)))
    return tickets
  return (
    Object.values(tickets)
      .filter(ticket => ticket.segments
      .filter(segment => filterList
      .includes(segment.stops.length.toString() as FilterOptions))
      .length === SEGMENT_AMOUNT)
    )
}

export const sortTicketList = (tickets: Array<Ticket>, sortType: SortOptions | null): Array<Ticket> => {
  switch (sortType) {
    case SortOptions.Cheap:
      return Object.values(tickets).sort((firstTicket: Ticket, nextTicket: Ticket) =>
        firstTicket.price - nextTicket.price
      )
    case SortOptions.Fast:
      return Object.values(tickets).sort((firstTicket: Ticket, nextTicket: Ticket) => {
        const firstTicketDuration = firstTicket.segments[0].duration + firstTicket.segments[1].duration
        const nextTicketDuration = nextTicket.segments[0].duration + nextTicket.segments[1].duration

        return firstTicketDuration - nextTicketDuration
      })
    default:
      return tickets
  }
}
