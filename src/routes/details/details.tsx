import { Link, useParams } from 'react-router-dom'
import { Button } from '../../components/buttons/button'
import './details.css'
import { ShowContextProvider } from '../../contexts/show'
import ShowSummary from '../../components/show-summary/show-summary'
import ShowPresentation from '../../components/show-presentation/show-presentation'

const ShowDetails = () => {
  const params = useParams()

  if (!params.id) return null

  return (
    <div className='details-container'>
      <Link to='/'>
        <Button data-testid='new-search-button'>
          <>
            New search&nbsp;
            <img src='/assets/zoom.svg' width='24' height='24' alt='search' />
          </>
        </Button>
      </Link>
      <div className='details-content'>
        <ShowContextProvider showId={params.id}>
          <ShowPresentation />
          <ShowSummary />
        </ShowContextProvider>
      </div>
    </div>
  )
}

export default ShowDetails
