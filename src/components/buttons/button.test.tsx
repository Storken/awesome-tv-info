import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './button'

const mockOnClick = jest.fn(() => {})

test('BUTTON | renders text', () => {
  render(<Button onClick={() => {}}>test</Button>)
  const button = screen.getByText('test')
  expect(button).toBeInTheDocument()
})

test('BUTTON | clicks', () => {
  render(<Button onClick={mockOnClick}>test</Button>)
  const button = screen.getByText('test')
  fireEvent.click(button)
  fireEvent.click(button)
  expect(mockOnClick.mock.calls).toHaveLength(2)
})
