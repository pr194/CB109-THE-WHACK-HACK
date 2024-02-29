import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className='maincn'>
        <div className='first'>

        <li>
          <a href='/'>Home</a>
          </li>
          <li>
            <a href='/About'>About</a>
          </li>

        </div>
        <div className='second'>
          <li>
            <a href='/cities'>Cities</a>
          </li>
          <li>
            <a href='/'>Explore</a>
          </li>
          <li>
            <a href='/Contact us'>Contact us</a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Navbar