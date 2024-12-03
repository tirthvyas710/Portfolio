import React, { useEffect } from 'react'
import Tilt from 'react-parallax-tilt'
import try6 from '/try6.avif'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Pg3 = () => {
  useEffect(() => {
    gsap.fromTo('#canvas2', 
      {
        opacity: 0,
        x: -100,
        scale: 0.5,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#canvas2",
          start: "top center",
          end: "bottom center",
          
          // markers: true,  // Uncomment for debugging
        }
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const skillsRow1 = ['HTML', 'CSS', 'JS', 'React'];
  const skillsRow2 = ['GSAP', 'LOCOMOTIVE', 'THREEJS'];
  const skillsRow3 = ['BOOTSTRAP', 'TAILWIND'];
  const skillsRow4 = ['WORDPRESS'];

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getRandomGradient = () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(45deg, ${color1}, ${color2})`;
  };

  
  const skillBoxClasses = 'text-xs sm:text-sm md:text-base text-white font-mono h-16 w-18 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-xl transition-all duration-500 flex justify-center items-center hover:scale-105 shadow-lg';
  const handleMouseEnter = (e) => {
    const randomColor = getRandomColor();
    e.currentTarget.style.background = getRandomGradient();
    e.currentTarget.style.boxShadow = `0 0 20px ${randomColor}, 0 0 60px rgba(0,0,0,0.3)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.background = '#1f2937';
    e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 8px 24px';
  };

  // Add this new function for the heading gradient
  const getHeadingGradient = () => {
    return 'linear-gradient(45deg,#ff0000,#0000ff)';  // red   to blue gradient
  };

  // Common heading style object to avoid repetition
  const headingStyle = {
    background: getHeadingGradient(),
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  return (
    <div className='bg-white text-black  px-2 sm:px-3 md:px-5 py-3 sm:py-4 md:py-6'>
      <div className='h-full w-full'>
        <div className='h-full w-full bg-gradient-to-br from-gray-100 via-gray-400 to-gray-800 rounded-[20px] sm:rounded-[35px] md:rounded-[50px] flex justify-center items-center'>
          <div id='canvas2' className='relative h-full w-full  bg-contain bg-center bg-no-repeat py-10'>
            
            {/* Skills Container */}
            <div className='flex flex-col space-y-8 md:space-y-16 px-4 sm:px-8 md:px-16 lg:px-32'>
              
              {/* First Row - Languages */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:justify-between w-full'>
                <h1 className='text-xl sm:text-2xl font-bold uppercase' style={headingStyle}>
                  Languages
                </h1>
                <div className='flex flex-wrap gap-3 sm:gap-5'>
                  {skillsRow1.map((skill, index) => (
                    <Tilt key={index} {...tiltConfig}>
                      <div 
                        className={skillBoxClasses}
                        style={{ 
                          background: '#1f2937',
                          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 24px'
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        title={skill}
                      >
                        <h1>{skill}</h1>
                      </div>
                    </Tilt>
                  ))}
                </div>
              </div>

              {/* Second Row - Animation */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:justify-between w-full'>
                <h1 className='text-xl sm:text-2xl font-bold uppercase' style={headingStyle}>
                  Animation
                </h1>
                <div className='flex flex-wrap gap-3 sm:gap-5'>
                  {skillsRow2.map((skill, index) => (
                    <Tilt key={index} {...tiltConfig}>
                      <div 
                        className={skillBoxClasses}
                        style={{ 
                          background: '#1f2937',
                          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 24px'
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        title={skill}
                      >
                        <h1>{skill}</h1>
                      </div>
                    </Tilt>
                  ))}
                </div>
              </div>

              {/* Third Row - Styling */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:justify-between w-full'>
                <h1 className='text-xl sm:text-2xl font-bold uppercase' style={headingStyle}>
                  Styling
                </h1>
                <div className='flex flex-wrap gap-3 sm:gap-5'>
                  {skillsRow3.map((skill, index) => (
                    <Tilt key={index} {...tiltConfig}>
                      <div 
                        className={skillBoxClasses}
                        style={{ 
                          background: '#1f2937',
                          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 24px'
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        title={skill}
                      >
                        <h1>{skill}</h1>
                      </div>
                    </Tilt>
                  ))}
                </div>
              </div>

              {/* Fourth Row - CMS */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:justify-between w-full'>
                <h1 className='text-xl sm:text-2xl font-bold uppercase' style={headingStyle}>
                  CMS
                </h1>
                <div className='flex flex-wrap gap-3 sm:gap-5'>
                  {skillsRow4.map((skill, index) => (
                    <Tilt key={index} {...tiltConfig}>
                      <div 
                        className={skillBoxClasses}
                        style={{ 
                          background: '#1f2937',
                          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 24px'
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        title={skill}
                      >
                        <h1>{skill}</h1>
                      </div>
                    </Tilt>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add Tilt configuration object
const tiltConfig = {
  tiltMaxAngleX: 15,
  tiltMaxAngleY: 15,
  perspective: 1000,
  scale: 1.05,
  transitionSpeed: 2000,
  gyroscope: true
};

export default Pg3
