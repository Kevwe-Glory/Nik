import React from 'react'
import { services } from '../Constant/main'
import ServiceCard from '../Components/ServiceCard'

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-warp gap-9'>  
        {services.map((service) => (<ServiceCard key={service.label} {...service} />))}
    </section>
   
  )
}

export default Services