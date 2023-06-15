import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { Show } from '../api/interfaces'
import { getShow } from '../api/service'

type ShowContextProps = {
  loading: boolean
  noResponse: boolean
  currentShow?: Show
}

type ShowProviderProps = {
  children: ReactNode
  showId: string
}

export const ShowContext: React.Context<ShowContextProps> =
  createContext<ShowContextProps>({} as ShowContextProps)

export const ShowContextProvider = ({
  children,
  showId
}: ShowProviderProps) => {
  const [loading, setLoading] = useState(false)
  const [noResponse, setNoResponse] = useState(false)
  const [currentShow, setCurrentShow] = useState<Show>()

  useEffect(() => {
    findShow(showId)
  }, [showId])

  const findShow = async (id: string) => {
    setLoading(true)
    setNoResponse(false)
    const response = await getShow(id)

    if (!response.success) {
      setNoResponse(true)
    } else if (response?.data) {
      setCurrentShow(response.data)
    }

    setLoading(false)
  }

  return (
    <ShowContext.Provider
      value={{
        loading,
        currentShow,
        noResponse
      }}
    >
      {children}
    </ShowContext.Provider>
  )
}

export default function useShow () {
  const context = useContext(ShowContext)

  return context
}
