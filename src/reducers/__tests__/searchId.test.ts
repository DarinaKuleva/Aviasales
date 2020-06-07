import searchId, { initialState } from '../searchId'
import {
  requestSearchId,
  successSearchId,
  failureSearchId
} from '../../actions/searchId'
import { SearchId } from '../../types'

const loadingState = {
  ...initialState,
  loading: true
}

describe('reducer: searchId', () => {
  test('REQUEST_SEARCH_ID', () => {
    expect(searchId(initialState, requestSearchId())).toEqual(loadingState)
  })

  test('SUCCESS_SEARCH_ID', () => {
    const data: SearchId = {searchId: 2}

    expect(searchId(loadingState, successSearchId(data))).toEqual({
      ...initialState,
      data
    })
  })

  test('FAILURE_SEARCH_ID', () => {
    const error = new Error('Error!')
    expect(searchId(loadingState, failureSearchId(error))).toEqual({
      ...initialState,
      isError: !!error
    })
  })
})
