import { AnimatedBeamMultipleOutputDemo } from '@/components/animated-beam-demo'
import Image from 'next/image'
import React from 'react'

const Flow = () => {
  return (
    <div>


    
         <h1 className="text-3xl text-black md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
        Our{" "}
            <span className="text-white flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-white">
           Our  transformative process work flow. From idea to Live WebSite.
          </p>
  
          

          <AnimatedBeamMultipleOutputDemo/>
          

    </div>
  )
}

export default Flow