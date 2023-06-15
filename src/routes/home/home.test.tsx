import { render, screen } from '@testing-library/react'
import Home from './home'

test('PATH: / renders all initial components', () => {
  render(<Home />)
  const title = screen.getByText('TV SHOW DATABASE')
  expect(title).toBeInTheDocument()
  const searchInput = screen.getByTestId('search-input')
  expect(searchInput).toBeInTheDocument()
  const submitButton = screen.getByTestId('search-submit-button')
  expect(submitButton).toBeInTheDocument()
})
