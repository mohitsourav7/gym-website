import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css';
import logo from "./images/fitness.png";

const Nav = () => {
  return (
    <>
    <div className='logo'>
        <NavLink to="/">
        <img src={logo} alt='logo'/>
        </NavLink>
        </div>
        
    <div className='navbar'>
        <ul className='nav-list'>
             <li>
                <NavLink to='/' className="link">Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' className="link">About</NavLink>
            </li>
            <li>
                <NavLink to='/programs' className="link">Programs</NavLink>
            </li>
            <li>
                <NavLink to='/contact' className="link">Contact</NavLink>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Nav