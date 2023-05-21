import React from 'react'
import ItemFooter from './ItemFooter'
import JadwalFooter from './JadwalFooter'
import InputFooter from './InputFooter'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <footer className='bg-primary-blue text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 md:mx-auto max-w-7xl px-6'>
        <ItemFooter />
        <JadwalFooter />
        <InputFooter />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-sm max-w-7xl pb-8 mx-auto'>
        <span>&copy; 2023 All rights reserved</span>
        <span>Terms Privacy Policy</span>
        <SocialIcons />
      </div>
    </footer>
  )
}

export default Footer
