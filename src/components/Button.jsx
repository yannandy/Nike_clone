import React from 'react'
import { arrowRight } from '../assets/icons'

const Button = (props) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-red-600 rounded-full text-white border-red-600">{props.label}
    <img src={arrowRight} alt='arrow right icon' className='ml-2 rounded-full w-5 h-5'/>
    </button>
  )
}

export default Button