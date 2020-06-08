import * as React from 'react'
import { connect } from 'react-redux'
import { requestTickets } from '../../actions/tickets'
import { getVisibleTicketsAmount } from '../../actions/visibleTicketsAmount'
import { getVisibleTickets } from '../../selectors'
import { DISPLAYED_TICKETS_AMOUNT } from '../../constants'
import Ticket from './Ticket'
import Loader from '../Loader'
import { LoaderSizes } from '../../models'
import { AppState } from '../../types'
import * as Styled from './styled'

const mapStateToProps = (state: AppState) => ({
  searchId: state.searchId.data.searchId,
  isLoadingTickets: state.tickets.loading,
  isErrorTickets: state.tickets.isError,
  tickets: state.tickets.data.tickets,
  visibleTicketsAmount: state.visibleTicketsAmount.amount,
  visibleTickets: getVisibleTickets(state)
})

const mapDispatchToProps = {
  requestTickets,
  getVisibleTicketsAmount
}

type HOCProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const TicketList: React.FC<HOCProps> = (props) => {
  const {
    isLoadingTickets,
    isErrorTickets,
    requestTickets,
    searchId,
    tickets,
    visibleTickets,
    getVisibleTicketsAmount,
    visibleTicketsAmount
  } = props

  React.useEffect(() => {
    !!searchId && !tickets?.length &&
      requestTickets()
  }, [requestTickets, searchId, tickets])

  if (isLoadingTickets) return <Loader size={LoaderSizes.Small}/>
  if (isErrorTickets) return (
    <Styled.ErrorMessage>
      Не удалось загрузить билеты. Перезагрузите страницу или повторите попытку позднее.
    </Styled.ErrorMessage>
  )

  return (
    <div>
      {visibleTickets?.map(ticket =>
        <React.Fragment key={ticket.price.toString() + ticket.carrier}>
          <Ticket ticket={ticket}/>
        </React.Fragment>
      )}
      <Styled.ButtonContainer>
        {visibleTicketsAmount < Number(tickets?.length) &&
          <Styled.Button onClick={() => getVisibleTicketsAmount(DISPLAYED_TICKETS_AMOUNT)}>
            Показать еще 5 билетов
          </Styled.Button>
        }
        {visibleTicketsAmount > DISPLAYED_TICKETS_AMOUNT &&
          <Styled.Button onClick={() => getVisibleTicketsAmount(-DISPLAYED_TICKETS_AMOUNT)}>
            Скрыть 5 билетов
          </Styled.Button>
        }
      </Styled.ButtonContainer>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps) (TicketList)
