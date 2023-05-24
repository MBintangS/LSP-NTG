'use client'

import React from 'react'
import CardCarousel from './CardCarousel'


const CaraouselAnggota = () => {
  return (
    <div className='grid grid-col grid-cols-3 flex-between'>
      <CardCarousel />
      <CardCarousel />
      <CardCarousel />
    </div>
  )
}

export default CaraouselAnggota
