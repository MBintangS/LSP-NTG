import React from 'react'
import Image from 'next/image'

const CardCarousel = () => {
  return (
        <div className='card-asesor'>
            <div className='w-full'>
                <Image
                    src="/assets/images/asesor.jpg"
                    alt="Gambar Sertifikasi"
                    width={500}
                    height={500}
                    className="m-auto rounded-t-3xl h-72 object-cover"
                />
            </div>
            <div className='mx-4 mt-2'>
                <p className='text-sm text-secondary-gray'>Asesor</p>
                <h1 className='text-lg'>Ridwan Kamal M.M</h1>
                <p className='text-sm text-secondary-gray'>SKEMA Auditor Forensik Korporasi (Corporate Forensic Auditor)</p>
            </div>
        </div>
  )
}

export default CardCarousel
