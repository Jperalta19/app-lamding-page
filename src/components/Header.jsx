import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1><span>Launch Your App</span> With Confidence And Creativity</h1>
        <p className='detalis'>A veces solo necesitamos a alguien con quien ir a ver la luna</p>
        <a href='https://www.youtube.com/@esteesmicanall' className='cv-btn'>Download</a>
      </div>
    </div>
  )
}

export default Header
