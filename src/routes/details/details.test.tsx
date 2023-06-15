import { fireEvent, render, screen } from '@testing-library/react'
import Details from './details'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import Home from '../home/home'

test('renders show details components and information', () => {
  const routes = [
    {
      path: '/details/:id',
      element: <Details />
    },
    {
      path: '/',
      element: <Home />
    }
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ['/details/123'],
    initialIndex: 0
  })

  render(<RouterProvider router={router} />)
  const backLink = screen.getByRole('link') as HTMLAnchorElement
  expect(backLink).toBeInTheDocument()
  expect(backLink.href).toBe('http://localhost/')
  fireEvent.click(backLink)
  const homePageTitle = screen.getByText('TV SHOW DATABASE')
  expect(homePageTitle).toBeInTheDocument()
})
