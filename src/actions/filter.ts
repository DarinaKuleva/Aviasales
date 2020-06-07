import { FilterOptions } from '../models'

export const SET_FILTER = 'SET_FILTER'
export const RESET_ALL_FILTERS = 'RESET_ALL_FILTERS'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const SET_ALL_FILTERS = 'SET_ALL_FILTERS'

export interface SetFilter {
  type: typeof SET_FILTER,
  data: FilterOptions
}

export interface RemoveFilter {
  type: typeof REMOVE_FILTER,
  data: FilterOptions
}

export interface SetAllFilters {
  type: typeof SET_ALL_FILTERS
}

export interface ResetAllFilters {
  type: typeof RESET_ALL_FILTERS
}

export const setFilter = (data: FilterOptions): SetFilter => ({
  type: SET_FILTER,
  data
})

export const removeFilter = (data: FilterOptions): RemoveFilter => ({
  type: REMOVE_FILTER,
  data
})

export const setAllFilters = (): SetAllFilters => ({
  type: SET_ALL_FILTERS
})

export const resetAllFilters = (): ResetAllFilters => ({
  type: RESET_ALL_FILTERS
})

export type FilterActionType = SetFilter | RemoveFilter | ResetAllFilters | SetAllFilters
