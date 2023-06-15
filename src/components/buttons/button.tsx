import './button.css'

type Props = {
  children: JSX.Element | JSX.Element[] | string
  disabled?: boolean
  onClick?: () => void
  testId?: string
}

export const Button = ({ children, disabled, onClick, testId }: Props) => {
  return (
    <button
      className='button'
      disabled={disabled}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  )
}
