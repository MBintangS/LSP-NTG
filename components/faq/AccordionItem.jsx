import React from 'react'
import { Collapse } from 'react-collapse'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

const AccordionItem = ({open, toggle, title, desc}) => {
  return (
    <div className='pt-[10px] lg:w-[1000px] mx-auto w-[500px]'>
      <div 
        className='bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer rounded-lg  shadow-lg' 
        onClick={toggle}>
            <p className='text-base font-medium'>
                {title}
            </p>
            <div className='text-[30px]'>
                {open ? <IoIosArrowUp /> : <IoIosArrowDown /> }
            </div>
      </div>

        <Collapse isOpened={open}>
            <div className='bg-white px-[50px] pb-[20px] text-sm'>{desc}</div>
        </Collapse>

    </div>
  )
}

export default AccordionItem
