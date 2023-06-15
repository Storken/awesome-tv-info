import { Link } from 'react-router-dom'
import { Show } from '../../api/interfaces'
import './search-result.css'
import SearchResultRow from './search-result-row'

type Props = {
  show: Show
}

const SearchResult = ({ show }: Props) => {
  return (
    <div className='search-result-container'>
      <Link to={`/details/${show.id}`}>
        <img
          className='search-result__image'
          src={show?.image?.medium ?? '/assets/tv.svg'}
          height='80'
          width='60'
          alt='movie'
        />
        <span className='search-result__content'>
          <span className='search-result__title'>{show.name}</span>
          <SearchResultRow imgSrc='/assets/calendar.svg' imgAlt='premiered'>
            {show.premiered?.toString() ?? 'Not available'}
          </SearchResultRow>
          <SearchResultRow imgSrc='/assets/tags.svg' imgAlt='genre'>
            {Boolean(show?.genres?.length)
              ? show.genres.join(', ')
              : 'Not available'}
          </SearchResultRow>
        </span>
      </Link>
    </div>
  )
}

export default SearchResult
