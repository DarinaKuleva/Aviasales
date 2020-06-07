import { FAILURE_TICKETS, REQUEST_TICKETS, SUCCESS_TICKETS, TicketsActionType } from '../actions/tickets'
import { RequestedTicketsData } from '../types'

type State = {
  loading: boolean,
  data: RequestedTicketsData,
  isError: boolean
}

export const initialState: State = {
  loading: false,
  data: {
    tickets: [],
    stop: false
  },
  isError: false
}

const tickets = (state: State = initialState, action: TicketsActionType): State => {
  switch (action.type) {
    case REQUEST_TICKETS:
      return {
        ...initialState,
        loading: true
      }

    case SUCCESS_TICKETS:
      return {
        ...initialState,
        data: action.tickets
      }

    case FAILURE_TICKETS:
      return {
        ...initialState,
        isError: action.isError
      }

    default:
      return state
  }
}

export default tickets
