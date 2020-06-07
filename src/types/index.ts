import rootReducer from '../reducers'
import { FilterOptions } from "../models";

export type AppState = ReturnType<typeof rootReducer>

export interface SearchId {
  searchId?: number
}

export interface Ticket {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    },
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    }
  ]
}

export interface Tickets {
  tickets?: Array<Ticket>,
  stop?: boolean
}
