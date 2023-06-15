import SearchForm from '../../components/search-form/search-form'
import SearchResults from '../../components/search-results/search-results'
import { SearchContextProvider } from '../../contexts/search'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <h1>TV SHOW DATABASE</h1>
      <SearchContextProvider>
        <SearchForm />
        <SearchResults />
      </SearchContextProvider>
    </div>
  )
}

export default Home
