import React from 'react'
import Banner1 from "../../assets/banner.png";
import {motion} from "framer-motion";
import { slideup } from '../../animation/animate';


const Banner = () => {
  return (
    <div>
        <div className="container py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* img section */}
                <div className="flex flex-col justify-center items-center">
                    < motion.img 
                     initial={{x:-100 , opacity:0}}
                     whileInView={{x:0 , opacity:1}}
                     transition={{delay:1 , duration:1}}
                    src={Banner1} alt="" className="w-[95%] md:w-full mx-auto"/>
                </div>

                {/* text section */}

                <div className="space-y-4 flex justify-center flex-col ">
                    <motion.h1 
                    variants={slideup(0.2)}
                    initial="initial"
                    whileInView="animate"
                    className="text-4xl font-bold font-serif">We Belive that a team makes any project better</motion.h1>

                    <motion.p 
                    variants={slideup(0.5)}
                    initial="initial"
                    whileInView="animate"
                    className="text-gray-500 text-sm leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas labore tenetur perferendis, voluptatem deserunt?
                    </motion.p>

                     {/* button section */}
                    <div>
                    <motion.button 
                     variants={slideup(0.4)}
                     initial="initial"
                     whileInView="animate"
                     className="primary-btn">Discover Now</motion.button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;