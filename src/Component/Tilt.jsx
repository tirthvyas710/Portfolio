import React from 'react'

const Tilt = ({tilt}) => {
  return (
    <div ref={tilt} className='flex-1 flex justify-center items-center absolute font-sans 
      top-[45%] sm:top-[40%] md:top-[35%] 
      left-[5%] sm:left-[6%] md:left-[7%]' >
        <p className='text-white text-3xl sm:text-4xl md:text-5xl font-bold'>
            I'm a <br />
            <span className='text-4xl sm:text-6xl md:text-6xl leading-snug text-[#636363] bg-clip-text text-transparent bg-gradient-to-r from-[#5263ff] to-[#ff0000]'>
              Frontend Developer
            </span>
            <br /> To hire.
        </p>
    </div>
  )
}

export default Tilt