import * as React from 'react'
import { connect } from 'react-redux'
import { resetAllSorting } from '../../actions/sorting'
import { fieldSortOptionsForHint } from '../../constants'
import RadioButtonContainer from './RadioButtonContainer'
import { SortOptions } from '../../models'
import { AppState } from '../../types'
import * as Styled from './styled'

const mapStateToProps = (state: AppState) => ({
  selectedSortType: state.sortType.data
})

const mapDispatchToProps = {
  resetAllSorting
}

type HOCProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const SortPanel: React.FC<HOCProps> = (props) => {
  const {
    resetAllSorting,
    selectedSortType
  } = props

  return (
    <Styled.SortPanel>
      {Object.values(SortOptions).map(sortingType =>
        <RadioButtonContainer sortingType={sortingType} key={sortingType}/>
      )}
      {selectedSortType &&
      <Styled.ResetButton onClick={() => resetAllSorting()}>
        <Styled.HintDescription>
          Сбросить сортировку по {fieldSortOptionsForHint[selectedSortType]}
        </Styled.HintDescription>
      </Styled.ResetButton>
      }
    </Styled.SortPanel>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel)
