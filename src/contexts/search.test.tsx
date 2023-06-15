import { fireEvent, render, screen } from '@testing-library/react'
import { SearchContext, SearchContextProvider } from './search'

const customRender = (ui: any, { providerProps }: any) => {
  return render(
    <SearchContextProvider {...providerProps}>{ui}</SearchContextProvider>
  )
}

test('SEARCH CONTEXT | renders', () => {
  customRender(
    <SearchContext.Consumer>
      {({ loading, searchShows }) => (
        <>
          <span data-testid='loading'>Loading: {loading.toString()}</span>
          <button onClick={() => searchShows('123')}>test-search</button>
        </>
      )}
    </SearchContext.Consumer>,
    {}
  )

  const loading = screen.getByTestId('loading')
  expect(loading).toContainHTML('false')

  const button = screen.getByText('test-search')
  fireEvent.click(button)
  expect(loading).toContainHTML('true')
})
