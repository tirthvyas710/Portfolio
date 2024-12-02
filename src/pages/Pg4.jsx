import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Model Component
const Model = React.memo(() => {
  const gltf = useLoader(GLTFLoader, 'pioneer_cdj_3000_pioneer_djm_a9/scene.gltf');
  const [scale, setScale] = useState(1.0);

  // Resize and Scale Handler
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScale(0.5);      // mobile
      else if (width < 1024) setScale(0.7); // tablet
      else setScale(1.0);                   // desktop
    };

    handleResize(); // Set initial scale
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Animation and Rotation Effect
  useEffect(() => {
    // Reset scale and animate
    gltf.scene.scale.set(0, 0, 0);
    
    gsap.to(gltf.scene.scale, {
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

    // Continuous rotation
    const rotation = () => {
      gltf.scene.rotation.y += 0.005;
    }
    
    const interval = setInterval(rotation, 16);
    return () => clearInterval(interval);
  }, [gltf, scale]);

  return <primitive object={gltf.scene} scale={scale} position={[0, 1, 0]} />
})

// Main Page Component
const Pg4 = () => {
  // Camera position state
  const [cameraPosition, setCameraPosition] = useState([5, 10, 10]);

  // Camera and Canvas Animations
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setCameraPosition([2, 8, 8]);     // mobile
      else if (width < 1024) setCameraPosition([2.5, 9, 9]); // tablet
      else setCameraPosition([3, 11, 11]);                   // desktop
    };

    handleResize(); // Set initial camera position
    window.addEventListener('resize', handleResize);

    // Fade-in animation for canvas (only on larger screens)
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
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-white text-black h-[100vh] px-2 sm:px-3 md:px-5 py-3 sm:py-4 md:py-6'>
      <div className='h-full w-full flex justify-center items-center bg-gradient-to-br from-red-600 via-purple-600 to-blue-600 rounded-[20px] sm:rounded-[35px] md:rounded-[50px]' >
        <div id='canvas' className='bg-contain bg-no-repeat h-full w-full bg-center lg:bg-[url("/try6.avif")] md:bg-none sm:bg-none flex justify-center items-center'>
          <div className='relative h-full w-full flex justify-center items-center'>
            <div className='absolute text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-pink-300 to-violet-200 
              text-[12vh] sm:text-[18vh] font-bold h-full w-full flex justify-between items-center flex-col py-20 
              font-["Montserrat"] tracking-tight 
              drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)]
              [text-shadow:_2px_2px_20px_rgb(0_0_0_/_20%)]'> 
              <p>Good vibes </p>
              <p>are my code</p>
            </div>
            <Canvas camera={{ position: cameraPosition, fov: 45, rotation: [-Math.PI / 2, 0, 0] }}>
              <ambientLight intensity={4} />
              <directionalLight position={[10, 20, 8]} intensity={5} />
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
