import './layout.css'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <div className='layout'>
      <div className='content'>{children}</div>
    </div>
  )
}

export default Layout
