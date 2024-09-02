import React from 'react'
import { truckFast, shieldTick, support } from '../assets/icons'
import ServiceCard from '../components/ServiceCard'

const services_list = [
    {
      imgURL: truckFast,
      label: "Free shipping",
      subtext: "Enjoy seamless shopping with our complimentary shipping service."
  },
  {
      imgURL: shieldTick,
      label: "Secure Payment",
      subtext: "Experience worry-free transactions with our secure payment options."
  },
  {
      imgURL: support,
      label: "Love to help you",
      subtext: "Our dedicated team is here to assist you every step of the way."
  },
]
const Services = () => {
  return (
    <section className='flex justify-center gap-9 flex-wrap max-container'>
      {services_list.map((service)=>(
        <ServiceCard {...service}/>
      ))}
    </section>
  )
}

export default Services