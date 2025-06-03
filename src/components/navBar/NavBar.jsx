import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className='navigation-block'>
       <ul>
        <Link to='home' className='menu-link'>Home</Link>
        <Link to='create' className='menu-link'>New</Link>
        <Link to='contact' className='menu-link'>Contact</Link>
       </ul>
    </nav>
  )
}
