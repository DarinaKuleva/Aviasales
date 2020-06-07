import rootReducer from '../reducers'

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

export interface RequestedTicketsData {
  tickets?: Array<Ticket>,
  stop?: boolean
}
