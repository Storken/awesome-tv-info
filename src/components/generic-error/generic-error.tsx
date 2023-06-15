import { Link } from 'react-router-dom'
import './generic-error.css'

const GenericError = () => {
  return (
    <div className='generic-error' data-testid='generic-error'>
      Something went wrong, try going back home <Link to='/'>here</Link>
    </div>
  )
}

export default GenericError
