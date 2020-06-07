import * as React from 'react'
import { connect } from 'react-redux'
import { fieldFilterOptions } from '../../../constants'
import { removeFilter, resetAllFilters, setFilter, setAllFilters } from '../../../actions/filter'
import { FilterOptions } from '../../../models'
import { AppState } from '../../../types'
import * as Styled from './styled'

interface Props {
  filter: FilterOptions
}

const mapStateToProps = (state: AppState) => ({
  selectedFilterList: state.filter.data
})

const mapDispatchToProps = {
  setFilter,
  resetAllFilters,
  removeFilter,
  setAllFilters
}

type HOCProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const CheckboxContainer: React.FC<Props & HOCProps> = (props) => {
  const {
    filter,
    setFilter,
    resetAllFilters,
    removeFilter,
    selectedFilterList,
    setAllFilters
  } = props

  const addFilter = () => {
    selectedFilterList.includes(filter)
      ? filter === FilterOptions.All
        ? resetAllFilters()
        : removeFilter(filter)
      : filter === FilterOptions.All
        ? setAllFilters()
        : setFilter(filter)
  }

  return (
    <Styled.CheckboxContainer>
      <Styled.CustomCheckbox
        type="checkbox"
        id={filter}
        name={filter}
        onChange={addFilter}
        checked={selectedFilterList.includes(filter)}
      />
      <Styled.Label htmlFor={filter}>
        {fieldFilterOptions[filter]}
      </Styled.Label>
    </Styled.CheckboxContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxContainer)
