import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './router.css'
import Details from '../details/details'
import Home from '../home/home'
import GenericError from '../../components/generic-error/generic-error'

let router = createBrowserRouter([
  {
    path: '/',
    loader: () => <>Loading...</>,
    Component: () => <Home />,
    errorElement: <GenericError />
  },
  {
    path: 'details/:id',
    loader: () => <>Loading...</>,
    Component: () => <Details />,
    errorElement: <GenericError />
  }
])

export default function App () {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}
