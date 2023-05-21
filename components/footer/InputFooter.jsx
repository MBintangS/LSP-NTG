import React from 'react'

const InputFooter = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='head-text-footer'>Tanyakan Sesuatu</h1>
        <div className="line-text-footer" />
        <input type='email' placeholder='Email Anda' className='input-footer'/>
        <textarea type='text' placeholder='Pertanyaan' className='input-footer resize-none'/>
        <button type='button' className='mx-3 font-semibold border w-24 rounded-full bg-white text-primary-blue ms-auto hover:bg-transparent hover:text-white py-1'>
            Submit
        </button>
    </div>
  )
}

export default InputFooter
