import * as React from 'react'
import { connect } from 'react-redux'
import { requestSearchId } from '../actions/searchId'
import FilterPanel from '../components/FilterPanel'
import SortPanel from '../components/SortPanel'
import TicketList from '../components/TicketList'
import ErrorPage from '../components/ErrorPage'
import Loader from '../components/Loader'
import { LoaderSizes } from '../models'
import { AppState } from '../types'
import * as Styled from './styled'

const mapStateToProps = (state: AppState) => ({
  searchId: state.searchId.data.searchId,
  isLoadingSearchId: state.searchId.loading,
  isErrorSearchId: state.searchId.isError
})

const mapDispatchToProps = {
  requestSearchId
}

type HOCProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const App: React.FC<HOCProps> = (props) => {
  const {
    isLoadingSearchId,
    isErrorSearchId,
    requestSearchId,
    searchId
  } = props

  React.useEffect(() => {
    !searchId && requestSearchId()
  }, [requestSearchId, searchId])

  if (isErrorSearchId) return <ErrorPage/>
  if (isLoadingSearchId) return <Loader size={LoaderSizes.Large}/>

  return (
    <Styled.Container>
      <FilterPanel/>
      <Styled.Tickets>
        <SortPanel/>
        <TicketList/>
      </Styled.Tickets>
    </Styled.Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
