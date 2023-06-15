import { render, screen } from '@testing-library/react'
import SearchResults from './search-results'
import { mockSearchResponse } from '../../mocks/search-response'
import { SearchResponse } from '../../api/interfaces'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { SearchContextProvider } from '../../contexts/search'

test('SEARCH RESULTS | renders results', () => {
  const mockResults = mockSearchResponse as SearchResponse[]
  const routes = [
    {
      path: '/',
      element: (
        <SearchContextProvider>
          <SearchResults mockResults={mockResults} />
        </SearchContextProvider>
      )
    }
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0
  })

  render(<RouterProvider router={router} />)
  const results = screen.getAllByRole('link')
  expect(results.length).toBe(5)
})

test('SEARCH RESULTS | renders slow network error message', () => {
  const routes = [
    {
      path: '/',
      element: (
        <SearchContextProvider>
          <SearchResults mockLoading={true} mockSlow={true} />
        </SearchContextProvider>
      )
    }
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0
  })

  render(<RouterProvider router={router} />)
  const slowMessage = screen.getByText(
    'The search is taking longer than usual, please bear with us'
  )
  expect(slowMessage).toBeInTheDocument()
})

test('SEARCH RESULTS | renders no network response', () => {
  const routes = [
    {
      path: '/',
      element: (
        <SearchContextProvider>
          <SearchResults mockNoResponse={true} />
        </SearchContextProvider>
      )
    }
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0
  })

  render(<RouterProvider router={router} />)
  const noNetworkResponse = screen.getByText(
    'We could not reach the servers, please try again shortly'
  )
  expect(noNetworkResponse).toBeInTheDocument()
})
