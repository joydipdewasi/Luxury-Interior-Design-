import React from 'react';
import HeroPng from '../../assets/hero.png';

const Hero = () => {
  

  return (
    <>
    <div className="container">
         <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[460px] gap-10">
            {/* text section */}
            <div className="flex flex-col justify-center gap-5 md:pr-8 lg:pr-14 text-center md:text-left pt-20 md:pt-0 px-10">

              <h1 className="text-3xl font-bold">SKETCH LUXURY INTERIOR DESIGN</h1>

                <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sequi et molestias dolorum ipsum voluptates iste voluptatibus similique dignissimos sapiente tempora quos officiis, repellat eum molestiae velit voluptatum necessitatibus reprehenderit.
              </p>

              {/* button section */}
             <div className="space-x-4">
                <button className="bg-black text-white px-5 py-2 rounded-md uppercase">Learn More</button>
                <button className="primary-btn  rounded-md ">Contact Us</button>
             </div>
            </div>

            {/* img section */}
            <div className="flex flex-col items-center justify-center">
                <img src={HeroPng} alt="" className=" w-[80%] md:w-[300px] object-cover md:scale-150" />
            </div>
          </div> 
    </div>
    </>
  )
}

export default Hero ;