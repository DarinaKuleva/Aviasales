import { Tickets } from '../types'

export const REQUEST_TICKETS = 'REQUEST_TICKETS'
export const SUCCESS_TICKETS = 'SUCCESS_TICKETS'
export const FAILURE_TICKETS = 'FAILURE_TICKETS'

export interface RequestTickets {
  type: typeof REQUEST_TICKETS
}

export interface SuccessTickets {
  type: typeof SUCCESS_TICKETS,
  tickets: Tickets
}

export interface FailureTickets {
  type: typeof FAILURE_TICKETS,
  isError: boolean
}

export const requestTickets = (): RequestTickets => ({
  type: REQUEST_TICKETS
})

export const successTickets = (tickets: Tickets): SuccessTickets => ({
  type: SUCCESS_TICKETS,
  tickets
})

export const failureTickets = (errors: object): FailureTickets => ({
  type: FAILURE_TICKETS,
  isError: !!errors
})

export type TicketsActionType = RequestTickets | SuccessTickets | FailureTickets
