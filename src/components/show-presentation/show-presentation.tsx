import './show-presentation.css'
import useShow from '../../contexts/show'
import ShowPresentationRow from './show-presentation-row'
import NoResponse from '../no-response/no-response'
import { Show } from '../../api/interfaces'

type PresentationRowData = {
  imgSrc: string
  imgAlt: string
  data?: string | null
}

const NOT_AVAILABLE = 'Not available'

type Props = {
  mockShow?: Show
}

const ShowPresentation = ({ mockShow }: Props) => {
  const { currentShow, noResponse } = useShow()

  const show = currentShow || mockShow

  if (noResponse) return <NoResponse />
  if (!show) return null

  const presentationInformation: PresentationRowData[] = [
    {
      imgSrc: '/assets/star.svg',
      imgAlt: 'rating',
      data: show.rating.average ? `${show.rating.average} / 10` : undefined
    },
    {
      imgSrc: '/assets/calendar.svg',
      imgAlt: 'premiered',
      data: show.premiered?.toString()
    },
    {
      imgSrc: '/assets/calendar-x.svg',
      imgAlt: 'ended',
      data: show.ended?.toString()
    },
    {
      imgSrc: '/assets/language.svg',
      imgAlt: 'language',
      data: show.language
    },
    {
      imgSrc: '/assets/tags.svg',
      imgAlt: 'genre',
      data: show?.genres?.join(', ')
    }
  ]

  return (
    <div className='show-presentation' data-testid='show-presentation'>
      <img
        height='300'
        width='180'
        alt='show'
        src={show?.image?.original || '/assets/tv.svg'}
        data-testid='show-presentation-image'
      />
      <div>
        <h1>{show.name}</h1>

        {presentationInformation.map(({ imgSrc, imgAlt, data }) => (
          <ShowPresentationRow key={imgAlt} imgSrc={imgSrc} imgAlt={imgAlt}>
            <span data-testid={imgAlt}>{data || NOT_AVAILABLE}</span>
          </ShowPresentationRow>
        ))}
      </div>
    </div>
  )
}

export default ShowPresentation
