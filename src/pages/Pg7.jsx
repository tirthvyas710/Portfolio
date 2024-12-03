import React from 'react'
import { Tilt } from 'react-tilt';

const Pg7 = () => {
  return (
    <div 
      id='main' 
      className='h-screen bg-white px-4 sm:px-6 md:px-8 lg:px-5 py-4 sm:py-6 md:py-8 flex flex-col'
    >
      <div 
        className='relative h-full w-full shadow-xl shadow-gray-500 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] bg-[url("/Bglast.avif")] bg-cover bg-center overflow-hidden'
      >
        <Tilt className='Tilt' options={{ max: 25 }} style={{ height: '100%', width: '100%' }}>
          <div className='absolute inset-0  p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col sm:flex-row justify-evenly items-start'>
            <h1 className='text-[10vh] sm:text-[12vh] md:text-[15vh] font-[Impact] w-full sm:w-[33.3%] h-full'>Got an <br /> <span className='text-[#484848]'>Idea</span> </h1>
            <div className='h-full w-full sm:w-[33.3%] flex flex-col justify-between'>
              <a className='text-[8vh] sm:text-[10vh] font-[Impact] mt-4 sm:mt-6'>
                Contact Me
              </a>
              <div className='mb-20 sm:mb-32 text-xl sm:text-2xl font-[Impact] leading-8'>
                <hr className='text-[#484848]' />
                <h1 className=''>Mail: <a href="mailto:tirthvyas66@gmail.com " className='bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent'>tirthvyas66@gmail.com</a></h1>
                <h1>Or can <br /> Call on : <a href="phone:7575001119" className='bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent'> +917575001119</a> </h1>
                <hr className='text-[#484848]' />
              </div>
            </div>
            <h1 className='text-[3vh] sm:text-[3vh] md:text-[10vh] md:pl-10 font-[Impact] w-full sm:w-[33.3%] h-full mt-0 sm:mt-0'> Planing <br /> for <span className='text-[#484848]'>Event</span> </h1>
          </div>
        </Tilt>
      </div>
    </div>
  )
}

export default Pg7
