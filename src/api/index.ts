import axios from 'axios'
import { SearchId, Tickets } from '../types'

export const requestSearchId = (): Promise<SearchId> =>
  axios.get('https://front-test.beta.aviasales.ru/search')

export const requestTickets = (searchId: number): Promise<Tickets> =>
  axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
