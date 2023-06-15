import './show-summary.css'
import useShow from '../../contexts/show'

const ShowSummary = () => {
  const { currentShow } = useShow()

  if (!currentShow?.summary) return null

  return (
    <div
      className='show-summary'
      dangerouslySetInnerHTML={{ __html: currentShow?.summary ?? '' }}
    ></div>
  )
}

export default ShowSummary
