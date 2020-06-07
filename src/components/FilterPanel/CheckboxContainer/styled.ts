import styled from 'styled-components'
import checkIcon from '../../../assets/check.svg'

interface Props {
  checked: boolean
}

export const CheckboxContainer = styled.div`
  padding: 10px 0 10px 20px;
  height: 20px;
  
  :hover {
    background-color: #F1FCFF;
  }
`

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  width: 100%;
  cursor: pointer;
  
  :before {
    content: '';
    width: 20px;
    height: 20px;
    border: 1px solid #9ABBCE;
    box-sizing: border-box;
    border-radius: 2px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`

export const CustomCheckbox = styled.input<Props>`
  position: absolute;
  z-index: -1;
  opacity: 0;
  
  :checked + ${Label}:before {
    border: 1px solid #2196F3;
    border-radius: 2px;
    background-image: url(${checkIcon});
  }
  
    
  ${({ checked }) => checked && `
    border: 1px solid #2196F3;
    border-radius: 2px;
    background-image: url(${checkIcon});
  `}
`
