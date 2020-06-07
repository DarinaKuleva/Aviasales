import tickets, { initialState } from '../tickets'
import {
  requestTickets,
  successTickets,
  failureTickets
} from '../../actions/tickets'
import { ticketList } from '../../mocks'
import { RequestedTicketsData } from '../../types'

const loadingState = {
  ...initialState,
  loading: true
}

describe('reducer: tickets', () => {
  test('REQUEST_TICKETS', () => {
    expect(tickets(initialState, requestTickets())).toEqual(loadingState)
  })

  test('SUCCESS_TICKETS', () => {
    const data: RequestedTicketsData = {
      tickets: ticketList,
      stop: false
    }

    expect(tickets(loadingState, successTickets(data))).toEqual({
      ...initialState,
      data
    })
  })

  test('FAILURE_TICKETS', () => {
    const error = new Error('Error!')
    expect(tickets(loadingState, failureTickets(error))).toEqual({
      ...initialState,
      isError: !!error
    })
  })
})
