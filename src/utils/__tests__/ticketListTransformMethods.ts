import { filterTicketList, sortTicketList } from '../ticketListTransformMethods'
import {
  ticketList,
  ticketsWithoutTransfers,
  ticketsWithSomeTransfers,
  ticketsSortedByFast,
  ticketsSortedByCheap
} from '../../mocks'
import { FilterOptions, SortOptions } from '../../models'

describe('ticketListTransformMethods: filterTicketList', () => {
  test('Return ticketList without transfers', () => {
    expect(filterTicketList(ticketList, [FilterOptions.WithoutTransfer])).toEqual(ticketsWithoutTransfers)
  })

  test('Return filtered ticketList by some filters', () => {
    const filterListWithSomeFilters = [
      FilterOptions.OneTransfer,
      FilterOptions.TwoTransfer,
      FilterOptions.ThreeTransfer
    ]

    expect(filterTicketList(ticketList, filterListWithSomeFilters)).toEqual(ticketsWithSomeTransfers)
  })

  test('Return filtered ticketList by all filters', () => {
    expect(filterTicketList(ticketList, [FilterOptions.All])).toEqual(ticketList)
  })
})

describe('ticketListTransformMethods: sortTicketList', () => {
  test('Return ticketList sorted by fast', () => {
    expect(sortTicketList(ticketList, SortOptions.Fast)).toEqual(ticketsSortedByFast)
  })

  test('Return ticketList sorted by cheap', () => {
    expect(sortTicketList(ticketList, SortOptions.Cheap)).toEqual(ticketsSortedByCheap)
  })

  test('Return initial ticketList if sort = null', () => {
    expect(sortTicketList(ticketList, null)).toEqual(ticketList)
  })
})
