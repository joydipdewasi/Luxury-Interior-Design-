import React from 'react'
import { FaVectorSquare } from "react-icons/fa6";
import { HiPencilSquare } from "react-icons/hi2";
import { HiCurrencyDollar } from "react-icons/hi2";
import {delay, motion} from "framer-motion";
import { slideup } from '../../animation/animate';


const ServiceCard = [
    {
        id:1,
        title:"Luxury Racities",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam.",
        icon:<FaVectorSquare />,
        link:"#",
        // delay:0.2,
    },
    {
        id:2,
        title:"Interior Design",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam.",
        icon:<HiPencilSquare />,
        link:"#",
        // delay:0.4,
    },
    {
        id:3,
        title:"Affordable Price",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam.",
        icon:<HiCurrencyDollar />,
        link:"#",
        // delay:0.8,
    },
];


const Services = () => {
  return (
    <>
     <div className="container py-20">
        {/* hidding title */}
           <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
            <motion.h1 
            variants={slideup(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-bold font-serif">
                What we provide
            </motion.h1>

            <motion.p
               variants={slideup(0.5)}
               initial="initial"
               whileInView={"animate"}
            className="text-gray-500 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, reprehenderit!</motion.p>
           </div>

             {/* card section */}
             
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
               {
                    ServiceCard.map((card) => {
                        return(

                            <div 
                            //  veriants={slideup(card.delay)}    initial="initial" 
                            //  whileInView={"animate"}
                             key={card.id}
                             className="space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-1000">

                                <span className=" inline-block taxt-xl border-[1px] border-black rounded-full p-4">{card.icon}</span>

                                <p className="text-2xl font-bold">{card.title}</p>
                                <p className="text-gray-400 text-xs">{card.description}</p>

                                <a href={card.link} className=" inline-block boredr-b border-black">Read More</a>
                            </div>
                        )
                    }) 
               }
        </div>
     </div>
    </>
  )
}

export default Services