import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed  top-10 right-[10%] flex justify-end items-center z-50'>
        <button className=' text-white text-xl px-4 py-2 rounded-full border-4 border-white bg-black  hover:bg-gray-400'>Hire Me</button>
       
        
        <i className="ri-disc-fill text-[#c3c3c3] ml-10 text-5xl hover:rotate-[720deg] transition-all duration-1000"></i>

        
    </div>
    

  )
}

export default Header