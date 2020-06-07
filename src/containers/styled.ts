import styled from 'styled-components'
import logo from '../assets/logo.svg'

export const Container = styled.div`
  max-width: 754px;
  margin: 0 auto;
  padding-top: 160px;
  display: flex;
  justify-content: space-between;
`

export const Tickets = styled.div`
  width: 502px;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '';
    position: absolute;
    background: url(${logo});
    width: 82px;
    height: 89px;
    right: 50%;
    margin-right: -41px;
    top: 50px;
  }  
`
