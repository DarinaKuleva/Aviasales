import { expectSaga, SagaType } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'
import { select } from 'redux-saga/effects'
import { requestTickets } from '../../api'
import { tickets } from '../tickets'
import { failureTickets, successTickets } from '../../actions/tickets'
import { searchId } from '../../selectors'
import { ticketList } from '../../mocks'
import { RequestedTicketsData } from '../../types'

describe('tickets saga', () => {
  const _searchId = 3

  test('tickets success', () => {
    const data: RequestedTicketsData = {
      tickets: ticketList,
      stop: false
    }

    return expectSaga(tickets as SagaType)
      .provide([
        [select(searchId), _searchId],
        [matchers.call.fn(requestTickets), {data}]
      ])
      .put(successTickets(data))
      .run()
  })

  test('tickets failure', () => {
    const error = new Error('Error!')

    return expectSaga(tickets as SagaType)
      .provide([
        [select(searchId), _searchId],
        [matchers.call.fn(requestTickets), throwError(error)]
      ])
      .put(failureTickets(error))
      .run()
  })
})
