import visibleTicketsAmount , { initialState } from '../visibleTicketsAmount'
import { getVisibleTicketsAmount } from '../../actions/visibleTicketsAmount'
import { DISPLAYED_TICKETS_AMOUNT } from '../../constants'

describe('reducer: visibleTicketsAmount', () => {
  test('GET_VISIBLE_TICKETS_AMOUNT (amount = DISPLAYED_TICKETS_AMOUNT)', () => {
    expect(visibleTicketsAmount(initialState, getVisibleTicketsAmount(DISPLAYED_TICKETS_AMOUNT))).toEqual({
      amount: initialState.amount + DISPLAYED_TICKETS_AMOUNT
    })
  })

  test('GET_VISIBLE_TICKETS_AMOUNT (amount = -DISPLAYED_TICKETS_AMOUNT)', () => {
    expect(visibleTicketsAmount(initialState, getVisibleTicketsAmount(-DISPLAYED_TICKETS_AMOUNT))).toEqual({
      amount: initialState.amount - DISPLAYED_TICKETS_AMOUNT
    })
  })
})
