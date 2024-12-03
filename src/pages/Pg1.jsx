import React, { useRef, useEffect } from 'react'
import Header from '../Component/Header'
import Tilt from '../Component/Tilt'
import Bottom from '../Component/Bottom'
import Lg from '../Component/Lg'
import gsap from 'gsap'

const Pg1 = () => {

    const tiltref = useRef(null)
    const mainRef = useRef(null)
    const bgRef = useRef(null)

    useEffect(() => {
        // Set initial states without y transform
        gsap.set([mainRef.current, bgRef.current, tiltref.current], {
            autoAlpha: 0
        });

        // Slower animations with longer durations and delays
        gsap.to(mainRef.current, {
            duration: 2,
            autoAlpha: 1,
            ease: "power2.inOut"
        });

        gsap.to(bgRef.current, {
            duration: 2,
            autoAlpha: 1,
            ease: "power2.inOut",
            delay: 0.8
        });

        gsap.to(tiltref.current, {
            duration: 2,
            autoAlpha: 1,
            ease: "power2.inOut",
            delay: 1.6
        });
    }, []);

    const mousemoving = (event) => {
        const sensitivityDivisor = 100;
        if (!tiltref.current) return;
        
        const element = tiltref.current;
        const rect = element.getBoundingClientRect();
        
        // Calculate the center point of the element
        const elementCenterX = rect.left + rect.width / 4;
        const elementCenterY = rect.top + rect.height / 4;
        
        // Calculate the distance from the mouse to the center
        const mouseX = event.clientX - elementCenterX;
        const mouseY = event.clientY - elementCenterY;
        
        // Convert to rotation with responsive sensitivity
        const rotateX = -mouseY / sensitivityDivisor;
        const rotateY = mouseX / sensitivityDivisor;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

  return (
    <>
    <div 
        ref={mainRef}
        id='main' 
        onMouseMove={mousemoving}  
        className='h-screen bg-white px-2 sm:px-3 md:px-5 py-3 sm:py-4 md:py-6 flex flex-col'
    >
        <div 
            ref={bgRef}
            className='h-full w-full shadow-xl shadow-gray-500 rounded-[20px] sm:rounded-[35px] md:rounded-[50px] bg-[url("/bg2.jpg")] sm:bg-[url("/bg2.jpg")] md:bg-[url("/bg.jpg")] bg-cover bg-center bg-no-repeat sm:bg-no-repeat' 
        />
        
        <Tilt tilt={tiltref} />    
        
        <Bottom />
    </div>
    </>
  )
}

export default Pg1
