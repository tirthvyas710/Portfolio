import React from 'react'

const Pg6 = () => {
  return (
    <div 
    id='main' 
    className='h-screen bg-white px-2 sm:px-3 md:px-5 py-3 sm:py-4 md:py-6 flex flex-col'
>
    <div 
        className='relative h-full w-full shadow-xl shadow-gray-500 rounded-[20px] sm:rounded-[35px] md:rounded-[50px] bg-black' >

            <div className=' h-full w-full flex justify-center items-center opacity-50'>
               <img src='./triangle 3.avif'   className='w-[80%] h-[80%] object-contain' alt="Triangle background" />
            </div>
            <div className='absolute top-[5%] px-6 sm:px-12 md:px-24 py-4 sm:py-6 md:py-10 h-full w-full flex flex-col items-center font-[Impact]'>
              <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4'>
                <p className='text-white text-[8vh] sm:text-[12vh] md:text-[16vh] leading-[8vh] sm:leading-[12vh] md:leading-[16vh]'>
                  <span className='text-[#484848]'>How </span>Can
                </p>
                <p className='text-white text-[8vh] sm:text-[12vh] md:text-[16vh] leading-[8vh] sm:leading-[12vh] md:leading-[16vh]'>
                  I help <span className='text-[#484848]'>you</span>
                </p>
              </div>
            </div>
            <div className='absolute bottom-[0%] left-0 h-auto sm:h-[50%] w-full px-4 sm:px-8 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
                <p className='text-white text-[2vh] sm:text-[2.2vh] md:text-[2.5vh] font-semibold leading-[3vh] sm:leading-[3.5vh] md:leading-[4vh] mt-4 sm:mt-8 md:mt-16 px-4 sm:px-6 md:px-10 w-full sm:w-[45%] md:w-[40%] flex justify-center items-center'>
                I am a self-taught front-end developer with a passion for crafting sleek, responsive, and user-friendly interfaces for ambitious professionals, entrepreneurs, artists, and boutique businesses. I specialize in transforming ideas into dynamic, visually compelling web experiences that are both functional and timeless.
                </p>

                <p className='text-white text-[2vh] sm:text-[2.2vh] md:text-[2.5vh] font-semibold leading-[3vh] sm:leading-[3.5vh] md:leading-[4vh] mt-4 sm:mt-8 md:mt-16 px-4 sm:px-6 md:px-10 w-full sm:w-[45%] md:w-[40%] flex justify-center items-center'>
                DJ artist with a passion for curating electrifying and unforgettable soundscapes for ambitious professionals, entrepreneurs, artists, and boutique events. I specialize in blending unique beats and timeless tracks to create immersive musical experiences that resonate with energy and style.
                </p>
            </div>

            

         

    </div>
    

</div>
  )
}

export default Pg6