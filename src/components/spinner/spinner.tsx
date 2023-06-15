import './spinner.css'

type Props = {
  big?: boolean
}

const Spinner = ({ big }: Props) => {
  return <div className={`spinner ${big && 'spinner--big'}`}></div>
}

export default Spinner
