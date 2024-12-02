import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { TextureLoader } from 'three'
import { useLoader as useThreeLoader } from '@react-three/fiber'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wrap Model component in React.memo to prevent unnecessary re-renders
const Model = React.memo(() => {
  const fbx = useLoader(FBXLoader, '/pioneer-cdj-3000-pioneer-djm-a9/source/Pioneer CDJ 3000, Pioneer DJM A9.fbx')
  const [scale, setScale] = React.useState(0.015);

  // Add resize handler
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScale(0.01);      // mobile
      else if (width < 1024) setScale(0.012); // tablet
      else setScale(0.015);                   // desktop
    };

    handleResize(); // Set initial scale
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  React.useEffect(() => {
    // Animation logic now uses dynamic scale
    fbx.scale.set(0, 0, 0);
    
    gsap.to(fbx.scale, {
      x: scale,
      y: scale,
      z: scale,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#canvas",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      }
    });

    const rotation = () => {
      fbx.rotation.y += 0.005;
    }
    
    const interval = setInterval(rotation, 16);
    return () => clearInterval(interval);
  }, [fbx, scale]);

  return <primitive object={fbx} scale={scale} position={[0, 0, 0]} />
})

const Pg4 = () => {
  // Add camera position state
  const [cameraPosition, setCameraPosition] = React.useState([3, 11, 11]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setCameraPosition([2, 8, 8]);     // mobile
      else if (width < 1024) setCameraPosition([2.5, 9, 9]); // tablet
      else setCameraPosition([3, 11, 11]);                   // desktop
    };

    handleResize(); // Set initial camera position
    window.addEventListener('resize', handleResize);

    // Only run animations if screen is larger than sm breakpoint
    if (window.innerWidth >= 640) {
      gsap.fromTo('#canvas', 
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#canvas",
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          }
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='bg-white text-black h-[100vh] px-2 sm:px-3 md:px-5 py-3 sm:py-4 md:py-6'>
      <div className='h-full w-full flex justify-center items-center bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 rounded-[20px] sm:rounded-[35px] md:rounded-[50px]' >
        <div id='canvas' className=' bg-contain bg-no-repeat h-full w-full bg-center lg:bg-[url("/try6.avif")] md:bg-none sm:bg-none flex justify-center items-center ' >
          <div className='relative h-full w-full flex justify-center items-center'>
            <div className='absolute text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-pink-300 to-violet-200 
              text-[12vh] sm:text-[18vh] font-bold h-full w-full flex justify-between items-center flex-col py-20 
              font-["Montserrat"] tracking-tight 
              drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)]
              [text-shadow:_2px_2px_20px_rgb(0_0_0_/_20%)]'> 
              <p>Good vibes </p>
              <p>are my code</p>
            </div>
            {/* Updated camera position for top view */}
            <Canvas camera={{ position: cameraPosition, fov: 45, rotation: [-Math.PI / 2, 0, 0] }}>
              <ambientLight intensity={4} />
              <directionalLight position={[13, 11, 8]} intensity={1} />
              <Suspense fallback={null}>
                <Model />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pg4