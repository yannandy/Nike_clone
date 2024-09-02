import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <img src={imgURL} alt="review" className='rounded-full w-[120px] h-[120px]'/>
        <p className='info-text mt-6 max-w-sm text-center'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-3'>
            <img src={star} alt="star" width={24} height={24} className='object-contain m-0'/>
            <p className='text-xl text-slate-gray font-montserrat'>({rating})</p>
            
        </div>
        <h3 className='mt-1 font-palanquin font-bold text-3xl'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard