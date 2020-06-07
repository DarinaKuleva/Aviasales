import filter, { initialState } from '../filter'
import { setFilter, removeFilter, setAllFilters, resetAllFilters } from '../../actions/filter'
import { FilterOptions } from '../../models'

const stateWithFilter = {
  data: [FilterOptions.TwoTransfer, FilterOptions.ThreeTransfer]
}

describe('reducer: filter', () => {
  test('SET_FILTER (state=initialState)', () => {
    expect(filter(initialState, setFilter(FilterOptions.OneTransfer))).toEqual({
      data: ["1"]
    })
  })

  test('SET_FILTER (stateWithFilter)', () => {
    expect(filter(stateWithFilter, setFilter(FilterOptions.OneTransfer))).toEqual({
      data: ["2", "3", "1"]
    })
  })

  test('REMOVE_FILTER', () => {
    expect(filter(stateWithFilter, removeFilter(FilterOptions.TwoTransfer))).toEqual({
      data: ["3"]
    })
  })

  test('SET_ALL_FILTERS (state=initialState)', () => {
    expect(filter(initialState, setAllFilters())).toEqual({
      data: ["All", "1", "2", "3", "0"]
    })
  })

  test('SET_ALL_FILTERS (stateWithFilter)', () => {
    expect(filter(stateWithFilter, setAllFilters())).toEqual({
      data: ["All", "1", "2", "3", "0"]
    })
  })

  test('RESET_ALL_FILTERS', () => {
    expect(filter(stateWithFilter, resetAllFilters())).toEqual({
      data: []
    })
  })
})
