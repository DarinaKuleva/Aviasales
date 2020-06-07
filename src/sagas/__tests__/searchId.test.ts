import { expectSaga, SagaType } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'
import { requestSearchId } from '../../api'
import { searchId } from '../searchId'
import { failureSearchId, successSearchId } from '../../actions/searchId'
import { SearchId } from '../../types'

describe('searchId saga', () => {
  test('searchId success', () => {
    const data: SearchId = {searchId: 2}

    return expectSaga(searchId as SagaType)
      .provide([
        [matchers.call.fn(requestSearchId), {data}]
      ])
      .put(successSearchId(data))
      .run()
  })

  test('searchId failure', () => {
    const error = new Error('Error!')

    return expectSaga(searchId as SagaType)
      .provide([
        [matchers.call.fn(requestSearchId), throwError(error)]
      ])
      .put(failureSearchId(error))
      .run()
  })
})
