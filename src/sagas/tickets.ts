import { call, put, takeEvery, select } from 'redux-saga/effects'
import { requestTickets } from '../api'
import { successTickets, failureTickets, REQUEST_TICKETS } from '../actions/tickets'
import { searchId } from '../selectors'

export function* tickets() {
  try {
    const id = yield select(searchId)
    const {data} = yield call(requestTickets, id)

    yield put(successTickets(data))
  } catch (error) {
    yield put(failureTickets(error))
  }
}

export function* watchTickets() {
  yield takeEvery(REQUEST_TICKETS, tickets)
}
