import { SortOptions, FilterOptions } from '../models'

export const SEGMENT_AMOUNT = 2
export const FIRST_TICKETS_AMOUNT = 5

export const fieldSortOptions = {
  [SortOptions.Cheap]: 'Самый дешевый',
  [SortOptions.Fast]: 'Самый быстрый'
}

export const fieldFilterOptions = {
  [FilterOptions.All]: 'Все',
  [FilterOptions.WithoutTransfer]: 'Без пересадок',
  [FilterOptions.OneTransfer]: '1 пересадка',
  [FilterOptions.TwoTransfer]: '2 пересадка',
  [FilterOptions.ThreeTransfer]: '3 пересадка'
}

export const fieldSortOptionsForHint = {
  [SortOptions.Cheap]: 'самым дешевым рейсам',
  [SortOptions.Fast]: 'самым быстрым рейсам'
}
