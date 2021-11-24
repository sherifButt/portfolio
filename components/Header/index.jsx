import Header_1 from './variants/Header.suffle.01'
const Header = ({variant}) => {
  let html;

  switch (variant) {
    case 1:
      html =<Header_1/>
      break;
  
    default:
      html = <Header_1/>
      break;
  }
  return (
    <>
      {html}
    </>
  )
}

Header.defaultProps = {
  variant:1
}

export default Header
