import { FAILURE_SEARCH_ID, REQUEST_SEARCH_ID, SearchIdActionType, SUCCESS_SEARCH_ID } from '../actions/searchId'
import { SearchId } from '../types'

export interface SearchIdState {
  data: SearchId,
  isError: boolean,
  loading: boolean
}

export const initialState = {
  data: {},
  isError: false,
  loading: false
}

const searchId = (state: SearchIdState = initialState, action: SearchIdActionType): SearchIdState => {
  switch (action.type) {
    case REQUEST_SEARCH_ID:
      return {
        ...initialState,
        loading: true
      }

    case FAILURE_SEARCH_ID:
      return {
        ...initialState,
        isError: action.isError
      }

    case SUCCESS_SEARCH_ID:
      return {
        ...initialState,
        data: action.searchId
      }

    default:
      return state
  }
}

export default searchId
