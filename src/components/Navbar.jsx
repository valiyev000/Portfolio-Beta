import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar() {



  return (
    <nav>
        <NavLink exact activeClassName="selectedNav" to="/">Home</NavLink>
        <NavLink  activeClassName="selectedNav" to="/about">About</NavLink>
        <NavLink  activeClassName="selectedNav" to="/contact">Contact</NavLink>
        <NavLink  activeClassName="selectedNav" to="/portfolios">Portfolios</NavLink>
        <NavLink  activeClassName="selectedNav" to="/journey">Journey</NavLink>
        <NavLink  activeClassName="selectedNav" to="/blog">Blog</NavLink>
    </nav>
  )
}
