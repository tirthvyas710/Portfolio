import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pg2 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Initial check
    handleResize();

    // Only run animations if not mobile
    if (!isMobile) {
      const h1Elements = document.querySelector('.pg2-container').querySelectorAll('.animate-h1');
      
      h1Elements.forEach((h1, index) => {
        gsap.fromTo(h1,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: h1,
              start: "top bottom-=100",
              end: "bottom center",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array

  // Updated font size calculation with larger sizes
  const calculateFontSize = () => {
    const viewportDimension = Math.min(viewportWidth, viewportHeight);
    const baseSize = viewportDimension * 0.2; // Increased from 0.15 to 0.2
    const minSize = Math.min(viewportWidth * 0.15, 80);  // Increased from 0.1 to 0.15, and 50 to 80
    const maxSize = Math.min(viewportWidth * 0.25, 350); // Increased from 0.18 to 0.25, and 250 to 350
    return Math.min(Math.max(baseSize, minSize), maxSize);
  };

  const textStyles = {
    fontSize: `${calculateFontSize()}px`,
    lineHeight: '2', // Reduced slightly to prevent too much vertical spacing
    textAlign: 'center',
    maxWidth: '98vw', // Increased from 95vw to allow more space
    margin: '0 auto',
    wordWrap: 'break-word',
  };

  return (
    <div className='bg-white pg2-container min-h-screen flex flex-col py-8'>
      <p className='text-center text-[#616161] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-sans px-4'> 
        ©TV Production 2024 | From Code to Crowd Control
      </p>

      <div className='text-black font-["impact"] flex-grow flex flex-col justify-center gap-1 sm:gap-2 px-4'>
        <h1 className={`${!isMobile && 'animate-h1'}`} style={textStyles}>
          Where 
        </h1>
        <h1 className={`hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:bg-clip-text 
                    hover:text-transparent transition-all duration-1000
                    ${!isMobile && 'animate-h1'}`} style={textStyles}>
          Design
        </h1>
        <h1 className={`${!isMobile && 'animate-h1'}`} style={textStyles}>
          Meets 
        </h1>
        <h1 className={`hover:bg-[url("/bg3.gif")] hover:bg-cover hover:bg-clip-text 
                    hover:text-transparent transition-all duration-1000
                    ${!isMobile && 'animate-h1'}`} style={textStyles}>
          Rhythm
        </h1>
      </div>
    </div>
  );
};

export default Pg2
