import { RESET_ALL_SORTING, SET_SORTING_TYPE, SortingActionType } from '../actions/sorting'
import { SortOptions } from '../models'

interface State {
  data: SortOptions | null
}

const initialState: State = {
  data: null
}

const sorting = (state: State = initialState, action: SortingActionType): State => {
  switch (action.type) {
    case SET_SORTING_TYPE:
      return {
        data: action.data
      }

    case RESET_ALL_SORTING:
      return initialState

    default:
      return state
  }
}

export default sorting
