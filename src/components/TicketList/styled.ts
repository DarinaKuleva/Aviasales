import styled from 'styled-components'

export const ErrorMessage = styled.p`
  margin: 30px auto;
  font-size: 15px;
  line-height: 20px;
  color: #4A4A4A;
  width: 400px;
  text-align: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-around;
  width: 500px;
  margin: 0 auto 50px auto;
`

export const Button = styled.button`
  width: 45%;
  height: 50px;
  background-color: #2196F3;
  color: #fff;
  border-radius: 25px;
  padding: 5px;
  border: none;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  
  :hover {
    color: #f1f1f1;
    outline: none;
  }
`
