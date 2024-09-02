import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10'>
      <div className='flex-1'>
        <img src={offer} alt="offer" width={773} height={687} />
      </div>
      <div className='flex flex-1 flex-col'>
          <h2 className='font-palanquin text-4xl capitalize lg:max-w-lg font-bold'> 
            <span className='text-coral-red'>Special </span>Offer
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          </p>
          <p className='mt-6 lg:max-w-lg info-text'> Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
          </p>
          <div className='mt-11 flex gap-8'>
            <Button label='View details'/>
            <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full text-slate-gray border-red-600">Learn more</button>
          </div>
       </div>
    </section>
  )
}

export default SpecialOffers