import { FilterActionType, REMOVE_FILTER, RESET_ALL_FILTERS, SET_ALL_FILTERS, SET_FILTER } from '../actions/filter'
import { FilterOptions } from '../models'

interface State {
  data: Array<FilterOptions>
}

export const initialState: State = {
  data: []
}

const filter = (state: State = initialState, action: FilterActionType): State => {
  switch (action.type) {
    case SET_FILTER:
      return {
        data: [...state.data, action.data]
      }

    case REMOVE_FILTER:
      return {
        data: [...state.data
          .filter(filter => filter !== action.data)
          .filter(filter => filter !== FilterOptions.All)
        ]
      }

    case SET_ALL_FILTERS:
      return {
        data: Object.values(FilterOptions)
      }

    case RESET_ALL_FILTERS:
      return initialState

    default:
      return state
  }
}

export default filter
