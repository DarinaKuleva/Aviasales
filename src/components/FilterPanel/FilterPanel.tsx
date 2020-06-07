import * as React from 'react'
import * as Styled from './styled'
import CheckboxContainer from './CheckboxContainer'
import { FilterOptions } from '../../models'

const FilterPanel: React.FC = () => {
  return (
    <Styled.FilterPanel>
      <Styled.Title>
        Количество пересадок
      </Styled.Title>
      <Styled.CheckboxGroup>
        {Object.values(FilterOptions).map(filter =>
          <CheckboxContainer filter={filter} key={filter}/>
        )}
      </Styled.CheckboxGroup>
    </Styled.FilterPanel>
  )
}

export default (FilterPanel)
