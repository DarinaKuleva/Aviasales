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
        ...state,
        loading: true
      }

    case FAILURE_SEARCH_ID:
      return {
        ...state,
        isError: action.isError,
        loading: false
      }

    case SUCCESS_SEARCH_ID:
      return {
        data: action.searchId,
        loading: false,
        isError: false
      }

    default:
      return state
  }
}

export default searchId
