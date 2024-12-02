import React from 'react'
import { FaArrowDown } from 'react-icons/fa6'

const Lg = () => {
  return (
    <div className='fixed bottom-[5%] right-10 flex flex-col gap-4 z-50'>
      <FaArrowDown 
        className='w-[30px] ml-2 sm:ml-4 md:ml-6 mix-blend-difference h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] text-gray-400 opacity-50 cursor-pointer transition-colors duration-300 animate-pulse'
      />
      
      <a href="/Tirth Vyas Resume.pdf" download={true} onClick={()=>{
        alert('Downloading Resume...')
      }}> 
        <img className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] rounded-full animate-spin-slow-reverse' 
          src="./frontend.png" alt="Download Resume" />
      </a> 
      
      <a href="https://www.instagram.com/tirth_710"> 
        <img className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] rounded-full animate-spin-slow-reverse' 
          src="./party.png" alt="Instagram" />
      </a>
    </div>
  )
}

export default Lg
