import { useState } from 'react'
import useSearch from '../../contexts/search'
import { Button } from '../buttons/button'
import './search-form.css'

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { searchShows } = useSearch()

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        searchShows(searchQuery)
      }}
      className='search-form'
    >
      <img
        width='18'
        height='18'
        alt='search icon'
        className='search-form__icon'
        src='/assets/tv.svg'
      />
      <input
        className='search-form__input'
        data-testid='search-input'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Search a show...'
      />
      <Button testId='search-submit-button' disabled={!searchQuery.length}>
        <img
          width='28'
          height='28'
          alt='submit icon'
          className='search-form__submit'
          src='/assets/zoom.svg'
        />
      </Button>
    </form>
  )
}

export default SearchForm
