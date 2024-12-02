import React from 'react'

const Bottom = () => {
  return (
    <div className='absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-16
      left-4 sm:left-6 md:left-8 lg:left-10
      w-[90%] sm:w-[85%] md:w-[80%]'>
        <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-sans
          leading-relaxed'>
          Shaping <span className='text-[#5263ff]'>Pixels</span> and 
          <span className='text-[#ff0000]'> Beats</span> into 
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#5263ff] to-[#ff0000a6]'> Pure Energy </span>.
        </p>
    </div>
  )
}

export default Bottom