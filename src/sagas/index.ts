import { fork } from 'redux-saga/effects'

import { watchSearchId } from './searchId'
import { watchTickets } from './tickets'

export default function * rootSaga () {
  yield fork(watchSearchId)
  yield fork(watchTickets)
}
