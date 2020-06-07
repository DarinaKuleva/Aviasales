import styled from 'styled-components'

export const Ticket = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
  width: 502px;
  height: 184px;
`

export const Header = styled.div`
  padding: 20px 50px 20px 20px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
`

export const Price = styled.p`
  margin: 0;
  font-size: 24px;
  line-height: 24px;
  color: #2196F3;
  padding: 6px 0;
  font-weight: 600;
`

export const Table = styled.table`
  width: 460px;
  height: 39px;
  margin: 0 auto;
  text-align: left;
  margin-bottom: 10px;
`

export const THeader = styled.th`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #A0B0B9;
  width: 140px;
  height: 15px;
  padding: 0;
`

export const TD = styled.td`
  font-weight: 600;
  font-size: 14px;
  color: #4A4A4A;
  padding: 0;
  height: 18px;
`
