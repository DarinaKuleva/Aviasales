import styled from 'styled-components'
import logo from '../../assets/logo.svg'

export const ErrorMessage = styled.p`
  margin: 300px auto 0 auto;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #4A4A4A;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    background: url(${logo});
    width: 82px;
    height: 89px;
    right: 50%;
    margin-right: -41px;
    top: -100px;
  } 
`
