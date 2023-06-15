import { render, screen } from '@testing-library/react'
import ShowPresentation from './show-presentation'
import { mockShowResponse } from '../../mocks/show-response'
import { Show } from '../../api/interfaces'

const NOT_AVAILABLE = 'Not available'
const baseUrl = 'http://localhost/'

test('SHOW PRESENTATION | renders values', () => {
  const mockShow = mockShowResponse as unknown as Show
  const testDate = '2023-01-01'
  const testSrc = 'test-src'
  mockShow.ended = testDate
  mockShow.premiered = testDate
  mockShow.rating.average = 10
  mockShow.image.original = testSrc
  mockShow.language = 'test-lang'
  mockShow.genres = ['test-genre']

  render(<ShowPresentation mockShow={mockShow} />)
  const rating = screen.getByTestId('rating')
  expect(rating).toContainHTML('10 / 10')
  const premiered = screen.getByTestId('premiered')
  expect(premiered).toContainHTML(testDate)
  const ended = screen.getByTestId('ended')
  expect(ended).toContainHTML(testDate)
  const language = screen.getByTestId('language')
  expect(language).toContainHTML('test-lang')
  const genre = screen.getByTestId('genre')
  expect(genre).toContainHTML('test-genre')
  const image = screen.getByTestId(
    'show-presentation-image'
  ) as HTMLImageElement
  expect(image.src).toBe(baseUrl + testSrc)
})

test('SHOW PRESENTATION | renders not available', async () => {
  const mockShow = mockShowResponse as unknown as Show
  mockShow.ended = null
  mockShow.premiered = null
  mockShow.rating.average = null
  mockShow.image.original = null
  mockShow.language = null
  mockShow.genres = []

  const defaultImageSrc = 'assets/tv.svg'

  render(<ShowPresentation mockShow={mockShow} />)
  const rating = screen.getByTestId('rating')
  expect(rating).toContainHTML(NOT_AVAILABLE)
  const premiered = screen.getByTestId('premiered')
  expect(premiered).toContainHTML(NOT_AVAILABLE)
  const ended = screen.getByTestId('ended')
  expect(ended).toContainHTML(NOT_AVAILABLE)
  const language = screen.getByTestId('language')
  expect(language).toContainHTML(NOT_AVAILABLE)
  const genre = screen.getByTestId('genre')
  expect(genre).toContainHTML(NOT_AVAILABLE)
  const image = screen.getByTestId(
    'show-presentation-image'
  ) as HTMLImageElement
  expect(image.src).toBe(baseUrl + defaultImageSrc)
})
