import { SortOptions } from '../models'

export const SET_SORTING_TYPE = 'SET_SORTING_TYPE'
export const RESET_ALL_SORTING = 'RESET_ALL_SORTING'

export interface SetSortingType {
  type: typeof SET_SORTING_TYPE,
  data: SortOptions
}

export interface ResetAllSorting {
  type: typeof RESET_ALL_SORTING
}

export const SetSortingType = (data: SortOptions): SetSortingType => ({
  type: SET_SORTING_TYPE,
  data
})

export const resetAllSorting = (): ResetAllSorting => ({
  type: RESET_ALL_SORTING
})

export type SortingActionType = SetSortingType | ResetAllSorting
