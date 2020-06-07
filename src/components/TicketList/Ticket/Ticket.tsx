import * as React from 'react'
import { getTimeFromMinutes, getAmountStops, getFlightInterval } from '../../../utils'
import { Ticket as TicketType } from '../../../types'
import * as Styled from './styled'

interface Props {
  ticket: TicketType
}

const Ticket: React.FC<Props> = ({ticket}) => {
  return (
    <Styled.Ticket>
      <Styled.Header>
        <Styled.Price>
          {ticket.price.toLocaleString('ru')} P
        </Styled.Price>
        <img
          src={`http://pics.avs.io/99/36/${ticket.carrier}.png`}
          alt={ticket.carrier}
        />
      </Styled.Header>
      {ticket.segments.map(segment =>
        <Styled.Table key={segment.date}>
          <tbody>
            <tr>
              <Styled.THeader>
                {segment.origin} - {segment.destination}
              </Styled.THeader>
              <Styled.THeader>
                В пути
              </Styled.THeader>
              <Styled.THeader>
                {getAmountStops(segment.stops.length)}
              </Styled.THeader>
            </tr>
            <tr>
              <Styled.TD>
                {getFlightInterval(segment.date, segment.duration)}
              </Styled.TD>
              <Styled.TD>
                {getTimeFromMinutes(segment.duration)}
              </Styled.TD>
              <Styled.TD>
                {segment.stops.join(', ')}
              </Styled.TD>
            </tr>
          </tbody>
        </Styled.Table>
      )}
    </Styled.Ticket>
  )
}

export default Ticket
