import { fireEvent, render, screen } from '@testing-library/react'
import SearchForm from './search-form'

test('SEARCH FORM | changes on input', () => {
  render(<SearchForm />)
  const input = screen.getByTestId('search-input') as HTMLInputElement
  const testQuery = 'adventure time'
  fireEvent.change(input, { target: { value: testQuery } })
  expect(input.value).toBe(testQuery)
})

test('SEARCH FORM | searches on enter', () => {
  render(<SearchForm />)
  const input = screen.getByTestId('search-input') as HTMLInputElement
  const testQuery = 'adventure time'
  fireEvent.change(input, { target: { value: testQuery } })
  fireEvent.keyPress(input, { key: 'enter' })
  expect(input.value).toBe(testQuery)
})
