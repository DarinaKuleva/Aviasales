import * as React from 'react'
import { connect } from 'react-redux'
import { setSortingType } from '../../../actions/sorting'
import { fieldSortOptions } from '../../../constants'
import { SortOptions } from '../../../models'
import { AppState } from '../../../types'
import * as Styled from './styled'

const mapStateToProps = (state: AppState) => ({
  selectedSortType: state.sortType.data
})

const mapDispatchToProps = {
  setSortingType
}

interface Props {
  sortingType: SortOptions
}

type HOCProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const RadioButtonContainer: React.FC<Props & HOCProps> = (props) => {
  const {
    sortingType,
    setSortingType,
    selectedSortType
  } = props

  const handleChangeSortType = () => {
    setSortingType(sortingType)
  }

  return (
    <Styled.RadioButtonContainer
      type={sortingType}
      isRadioButtonSelected={sortingType === selectedSortType}
      onClick={handleChangeSortType}
    >
      <Styled.Label>
        <Styled.CustomRadioButton
          type="radio"
          checked={sortingType === selectedSortType}
          name={sortingType}
          onChange={handleChangeSortType}
        />
        {fieldSortOptions[sortingType]}
      </Styled.Label>
    </Styled.RadioButtonContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioButtonContainer)
