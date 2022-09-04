import React from 'react'
import { Link } from "react-router-dom";
import NavLogo from '../NavbarMyPic.jpeg'
import '../styles/Navbar.css'
import ThemeToggle from './ThemeToggle';
import { useSelector } from 'react-redux'

export default function Navbar() {
  const darkState = useSelector(state => state.darkmode.value);
  return (
    <nav id='navbar' className={darkState ? "dark" : ""}>
      <div className='logo'>
        <Link className='' to="/"><img src={NavLogo} alt="Navbar Logo" /></Link>

      </div>
      <ul>
        <li className={"item"}><Link className='' to="/">Aryan Chourey</Link></li>
      </ul>
      <div className="themeToggle">
        <ThemeToggle />
      </div>
    </nav>

  )
}
