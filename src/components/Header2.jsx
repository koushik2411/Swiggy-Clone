import React from 'react'
import Navbar from './Navbar'

function Header2() {
  return (
    <div>
        <header className=' w-full p-3 px-6 flex items-center justify-between bg-gray-100'>
            {/* Logo */}
            <div>
                <img
                    src="https://res.cloudinary.com/dcfjexbss/image/upload/v1777822201/swiggy_logo_white_yvjxtd.avif"
                    className=" h-12 w-fit bg-orange-600 p-2 rounded-2xl hidden md:flex"
                />

                <img
                    src='https://res.cloudinary.com/dcfjexbss/image/upload/v1777822202/swiggy-1_cszsv7.svg'
                    className=' h-12 md:hidden'
                />
            </div>

            <Navbar/>
        </header>
    </div>
  )
}

export default Header2