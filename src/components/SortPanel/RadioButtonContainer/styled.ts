import styled from 'styled-components'
import { SortOptions } from '../../../models'

interface Props {
  type: SortOptions,
  isRadioButtonSelected: boolean
}

export const RadioButtonContainer = styled.div<Props>`
  display: block;
  position: relative;
  width: 50%;
  height: 100%;
  background: #FFFFFF;
  border: 1px solid #DFE5EC;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #4A4A4A;
  cursor: pointer;
  
  :hover {
    color: #2196F3;
  }
  
  ${({ type }) => type === SortOptions.Cheap && `
    border-radius: 5px 0 0 5px;
    border-right: none;
  `}
  
  ${({ type }) => type === SortOptions.Fast && `
     border-radius: 0 5px 5px 0;
  `}
  
  ${({ isRadioButtonSelected }) => isRadioButtonSelected && `
     background: #2196F3;
     color: #FFFFFF;
     border: 1px solid #2196F3;
     
     :hover {
       color: #FFFFFF;
     }
  `}
`

export const CustomRadioButton = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  cursor: pointer;
`
