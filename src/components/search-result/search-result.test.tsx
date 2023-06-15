import { render, screen } from '@testing-library/react'
import SearchResult from './search-result'
import { mockSearchResponse } from '../../mocks/search-response'
import { Show } from '../../api/interfaces'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

test('SEARCH RESULT | renders link', async () => {
  const routes = [
    {
      path: '/',
      element: <SearchResult show={mockSearchResponse[0].show as Show} />
    }
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0
  })

  render(<RouterProvider router={router} />)
  const link = screen.getByRole('link') as HTMLAnchorElement
  expect(link).toBeInTheDocument()
  expect(link.href).toContain(
    `details/${mockSearchResponse[0].show.id.toString()}`
  )
})

test('SEARCH RESULT | renders not available', async () => {
  const mockShow = {
    ...mockSearchResponse[0].show,
    premiered: null,
    genres: []
  } as Show

  const routes = [
    {
      path: '/',
      element: <SearchResult show={mockShow} />
    }
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0
  })

  render(<RouterProvider router={router} />)

  const genres = screen.getByTestId('genre')
  expect(genres).toContainHTML('Not available')

  const premiered = screen.getByTestId('premiered')
  expect(premiered).toContainHTML('Not available')
})
