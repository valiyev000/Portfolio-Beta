import { NavLink,  useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import burgerIcon from '../assets/burgerMenu.svg'
import { useState } from 'react'

export default function Navbar() {

  const [navOpened, setNavOpened] = useState(false)

  function closeNavFunc() {
    setNavOpened((prev)=>!prev)
  }

  const {pathname} = useLocation()




  const pageTitle = [
    {page:"/", text: "Home"},
    {page:"/about", text: "About"},
    {page:"/contact", text: "Contact"},
    {page:"/portfolios", text: "Portfolios"},
    {page:"/journey", text: "Journey"},
    {page:"/blog", text: "Blog"},
  ]

  const currentPageTitle = pageTitle.find((e)=>e.page===pathname)
  

  return (
    <nav>
      <div className="navDesktop">
        <NavLink exact activeClassName="selectedNav" to="/">Home</NavLink>
        <NavLink activeClassName="selectedNav" to="/about">About</NavLink>
        <NavLink activeClassName="selectedNav" to="/contact">Contact</NavLink>
        <NavLink activeClassName="selectedNav" to="/portfolios">Portfolios</NavLink>
        <NavLink activeClassName="selectedNav" to="/journey">Journey</NavLink>
        <NavLink activeClassName="selectedNav" to="/blog">Blog</NavLink>
      </div>
      <div className="navMobile" style={{height: navOpened ? "250px" : "54px"}}>
        <div className="top">
          <img src={burgerIcon} alt="burgerMenu.svg" onClick={closeNavFunc} />
          <div className="navHeader">{currentPageTitle.text}</div>
        </div>
        <div className="navMain">
          <NavLink exact activeClassName="selectedNav" to="/" onClick={closeNavFunc}>Home</NavLink>
          <NavLink activeClassName="selectedNav" to="/about" onClick={closeNavFunc}>About</NavLink>
          <NavLink activeClassName="selectedNav" to="/contact" onClick={closeNavFunc}>Contact</NavLink>
          <NavLink activeClassName="selectedNav" to="/portfolios" onClick={closeNavFunc}>Portfolios</NavLink>
          <NavLink activeClassName="selectedNav" to="/journey" onClick={closeNavFunc}>Journey</NavLink>
          <NavLink activeClassName="selectedNav" to="/blog" onClick={closeNavFunc}>Blog</NavLink>
        </div>
      </div>
    </nav>
  )
}
//54px to 250px