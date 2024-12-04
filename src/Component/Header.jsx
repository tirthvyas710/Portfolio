import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed  top-10 right-[10%] flex justify-end items-center z-50'>
        <a href="/Tirth Vyas Resume.pdf " download={true} onClick={()=>{
          alert('Downloading Resume...')
        }}><button className=' text-white text-xl px-4 py-2 rounded-full border-4 border-white bg-black  hover:bg-[#707070]'>Hire Me</button></a>
       
       <a href="https://www.instagram.com/tirth_710" className='transition-all duration-200 animate-pulse ' >
        <i className="ri-disc-fill text-purple-300 ml-10 text-5xl " > </i>
</a>
       
    </div>
    

  )
}

export default Header
