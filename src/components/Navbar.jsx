import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className=' lg:flex gap-8 font-bold text-md hidden'>
        <Link>Swiggy Corporate</Link>
        <Link>Partner with us</Link>
      </nav>
    </div>
  )
}

export default Navbar