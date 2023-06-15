type Props = {
  children: JSX.Element | string | string[]
  imgSrc: string
  imgAlt: string
}

const SearchResultRow = ({ children, imgSrc, imgAlt }: Props) => {
  return (
    <span className='search-result__row' data-testid={imgAlt}>
      <img src={imgSrc} width='18' height='18' alt={imgAlt} />
      &nbsp;
      {children}
    </span>
  )
}

export default SearchResultRow
