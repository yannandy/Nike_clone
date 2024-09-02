import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
        <img src={headerLogo} alt='logo' width={130} height={29}/>
        </a>
      
      <ul className="flex flex-1 justify-center gap-16 items-center max-lg:hidden">
        {navLinks.map((navLink)=>(
          <li> <a href={navLink.href} className="font-montserrat leading-normal text-lg text-slate-600"> {navLink.label}</a> </li>
        ))}
      </ul>
      <div className='lg:hidden'>
        <img src={hamburger} alt='hamburger' width={25} height={25}/>
      </div>
      </nav>
    </header>
  )
}

export default Nav