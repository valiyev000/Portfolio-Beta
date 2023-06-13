import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import burgerIcon from '../assets/burgerMenu.svg'

export default function Navbar() {



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
      <div className="navMobile">
        <div className="top">
          <img src={burgerIcon} alt="burgerMenu.svg" />
          <div className="navHeader">Home</div>
        </div>
        <div className="navMain">
          <NavLink exact activeClassName="selectedNav" to="/">Home</NavLink>
          <NavLink activeClassName="selectedNav" to="/about">About</NavLink>
          <NavLink activeClassName="selectedNav" to="/contact">Contact</NavLink>
          <NavLink activeClassName="selectedNav" to="/portfolios">Portfolios</NavLink>
          <NavLink activeClassName="selectedNav" to="/journey">Journey</NavLink>
          <NavLink activeClassName="selectedNav" to="/blog">Blog</NavLink>
        </div>
      </div>
    </nav>
  )
}
