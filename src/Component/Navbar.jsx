import React from 'react'
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <div className='w-7/8 mx-auto'>
        <nav className='flex justify-between items-center py-4'>
            <div className='w-22 md:w-fit'><img src={logo} alt="" /></div>
            <div className='flex justify-between gap-6 items-center'>
                <ul className='md:flex hidden  justify-between gap-6' >
                    <li>About us</li>
                    <li>Services</li>
                    <li>use Cases</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <button className='border px-2 md:py-3 md:px-5 rounded-xl'>Request a quote</button>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar;