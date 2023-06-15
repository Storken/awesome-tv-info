import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { SearchResponse } from '../api/interfaces'
import { getShowsFromSearch } from '../api/service'

type SearchContextProps = {
  loading: boolean
  searchShows: (query: string) => Promise<void>
  currentResults: SearchResponse[]
  slow: boolean
  noResponse: boolean
}

type SearchProviderProps = {
  children: ReactNode
}

export const SearchContext: React.Context<SearchContextProps> =
  createContext<SearchContextProps>({} as SearchContextProps)

export const SearchContextProvider = ({ children }: SearchProviderProps) => {
  const [loading, setLoading] = useState(false)
  const [secondsLoading, setSecondsLoading] = useState(0)
  const [slow, setSlow] = useState(false)
  const [noResponse, setNoResponse] = useState(false)
  const [currentResults, setCurrentResults] = useState<SearchResponse[]>([])

  const sleep = async (seconds: number) => {
    return new Promise<void>(res => {
      setTimeout(() => {
        res()
      }, seconds * 1000)
    })
  }

  const captureFetchTime = async () => {
    if (loading) {
      await sleep(1)
      setSecondsLoading(seconds => seconds + 1)
      captureFetchTime()
    }
  }

  const searchShows = async (query: string) => {
    setNoResponse(false)
    setLoading(true)
    captureFetchTime()

    const response = await getShowsFromSearch(query)

    if (!response.success) {
      setNoResponse(true)
    } else if (response?.data) {
      setCurrentResults(response.data)
    }

    setLoading(false)
  }

  useEffect(() => {
    setSlow(false)
    if (secondsLoading > 3 && loading) {
      setSlow(true)
    }
  }, [loading, secondsLoading])

  return (
    <SearchContext.Provider
      value={{
        loading,
        searchShows,
        currentResults,
        slow,
        noResponse
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default function useSearch () {
  const context = useContext(SearchContext)

  return context
}
