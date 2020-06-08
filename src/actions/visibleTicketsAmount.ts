export const GET_VISIBLE_TICKETS_AMOUNT = 'GET_VISIBLE_TICKETS_AMOUNT'

export interface GetVisibleTicketsAmount {
  type: typeof GET_VISIBLE_TICKETS_AMOUNT,
  amount: number
}

export const getVisibleTicketsAmount = (amount: number): GetVisibleTicketsAmount => ({
  type: GET_VISIBLE_TICKETS_AMOUNT,
  amount
})
