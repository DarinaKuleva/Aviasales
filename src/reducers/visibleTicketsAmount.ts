import { GET_VISIBLE_TICKETS_AMOUNT, GetVisibleTicketsAmount } from '../actions/visibleTicketsAmount'

type State = {
  amount: number
}

export const initialState: State = {
  amount: 5
}

const visibleTicketsAmount = (state: State = initialState, action: GetVisibleTicketsAmount): State => {
  switch (action.type) {
    case GET_VISIBLE_TICKETS_AMOUNT:
      return {
        amount: state.amount + action.amount
      }

    default:
      return state
  }
}

export default visibleTicketsAmount
