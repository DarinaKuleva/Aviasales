import sorting, { initialState } from '../sorting'
import { setSortingType, resetAllSorting } from '../../actions/sorting'
import { SortOptions } from '../../models'

const stateWithSortType = {
  data: SortOptions.Cheap
}

describe('reducer: sorting', () => {
  test('SET_SORTING_TYPE (state=initialState)', () => {
    expect(sorting(initialState, setSortingType(SortOptions.Fast))).toEqual({
      data: SortOptions.Fast
    })
  })

  test('SET_SORTING_TYPE (stateWithSortType)', () => {
    expect(sorting(stateWithSortType, setSortingType(SortOptions.Fast))).toEqual({
      data: SortOptions.Fast
    })
  })

  test('RESET_ALL_SORTING', () => {
    expect(sorting(stateWithSortType, resetAllSorting())).toEqual({...initialState})
  })
})
