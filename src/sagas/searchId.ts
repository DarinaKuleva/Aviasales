import { call, put, takeEvery } from 'redux-saga/effects'
import { requestSearchId } from '../api'
import * as actionCreators from '../actions/searchId'

export function * searchId () {
  try {
    const trackId = yield call(requestSearchId)

    yield put(actionCreators.successSearchId(trackId.data))
  } catch (error) {
    yield put(actionCreators.failureSearchId(error))
  }
}

export function * watchSearchId () {
  yield takeEvery(actionCreators.REQUEST_SEARCH_ID, searchId)
}
