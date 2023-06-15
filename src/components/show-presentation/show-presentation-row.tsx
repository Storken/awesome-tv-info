import './show-presentation.css'

type Props = {
  children: JSX.Element
  imgSrc: string
  imgAlt: string
}

const ShowPresentationRow = ({ children, imgSrc, imgAlt }: Props) => {
  return (
    <div className='information-row'>
      <img src={imgSrc} alt={imgAlt} width='18' height='18' title={imgAlt} />
      {children}
    </div>
  )
}

export default ShowPresentationRow
