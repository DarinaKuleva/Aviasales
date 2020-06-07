import styled from 'styled-components'
import deleteIcon from '../../assets/delete.svg'

export const SortPanel = styled.div`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  width: 502px;
  height: 50px;
  margin-bottom: 20px;
`

export const HintDescription = styled.span`
  visibility: hidden;
  width: 200px;
  background-color: #2196F3;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  left: 30px;
  top: -15px;
  
  :after {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #2196F3 transparent transparent;
  }
`

export const ResetButton = styled.button`
  content: '';
  position: absolute;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  background: url(${deleteIcon});
  width: 12px;
  height: 12px;
  right: -40px;
  top: 50%;
  margin-top: -6px;
  
  &:focus {
    outline: none;
  }
  
  :hover ${HintDescription} {
    visibility: visible;
  }
`
