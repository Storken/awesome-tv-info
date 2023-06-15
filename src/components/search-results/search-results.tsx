import { SearchResponse } from '../../api/interfaces'
import useSearch from '../../contexts/search'
import NoResponse from '../no-response/no-response'
import SearchResult from '../search-result/search-result'
import Spinner from '../spinner/spinner'
import './search-results.css'

type Props = {
  mockResults?: SearchResponse[]
  mockSlow?: boolean
  mockNoResponse?: boolean
  mockLoading?: boolean
}

const SearchResults = ({
  mockResults,
  mockSlow,
  mockLoading,
  mockNoResponse
}: Props) => {
  const { currentResults, loading, slow, noResponse } = useSearch()

  const searchResults = mockResults ?? currentResults
  const slowNetwork = mockSlow ?? slow
  const noNetworkResponse = mockNoResponse ?? noResponse
  const loadingSearch = mockLoading ?? loading

  if (loadingSearch)
    return (
      <div className='search-results__spinner'>
        <Spinner big />
        <br />
        {slowNetwork
          ? 'The search is taking longer than usual, please bear with us'
          : ''}
      </div>
    )

  return (
    <>
      {searchResults?.map(({ show }) => (
        <SearchResult key={`show-${show.id}`} show={show} />
      ))}
      {noNetworkResponse && <NoResponse />}
    </>
  )
}

export default SearchResults
