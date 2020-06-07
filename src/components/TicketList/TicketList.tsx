import * as React from 'react'
import { connect } from 'react-redux'
import { requestTickets } from '../../actions/tickets'
import { getFirstPartTickets } from '../../selectors'
import Ticket from './Ticket'
import Loader from '../Loader'
import { AppState } from '../../types'
import { LoaderSizes } from '../../models'
import { ErrorMessage } from './styled'

const mapStateToProps = (state: AppState) => ({
  searchId: state.searchId.data.searchId,
  isLoadingTickets: state.tickets.loading,
  isErrorTickets: state.tickets.isError,
  tickets: state.tickets.data?.tickets,
  firstPartTickets: getFirstPartTickets(state)
})

const mapDispatchToProps = {
  requestTickets
}

type HOCProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const TicketList: React.FC<HOCProps> = (props) => {
  const {
    isLoadingTickets,
    isErrorTickets,
    firstPartTickets,
    requestTickets,
    searchId,
    tickets
  } = props

  React.useEffect(() => {
    !!searchId && !tickets?.length &&
      requestTickets()
  }, [requestTickets, searchId, tickets])

  if (isLoadingTickets) return <Loader size={LoaderSizes.Small}/>
  if (isErrorTickets) return (
    <ErrorMessage>
      Не удалось загрузить билеты. Перезагрузите страницу или повторите попытку позднее.
    </ErrorMessage>
  )

  return (
    <div>
      {firstPartTickets?.map(ticket =>
        <React.Fragment key={ticket.price.toString() + ticket.carrier}>
          <Ticket ticket={ticket}/>
        </React.Fragment>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps) (TicketList)
