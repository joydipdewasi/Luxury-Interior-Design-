import React from 'react'
import { FaVectorSquare } from "react-icons/fa6";
import { HiPencilSquare } from "react-icons/hi2";
import { HiCurrencyDollar } from "react-icons/hi2";


const ServiceCard = [
    {
        id:1,
        title:"Luxury Racities",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam.",
        icon:<FaVectorSquare />,
        link:"#",
    },
    {
        id:2,
        title:"Interior Design",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam.",
        icon:<HiPencilSquare />,
        link:"#",
    },
    {
        id:3,
        title:"Affordable Price",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam.",
        icon:<HiCurrencyDollar />,
        link:"#",
    },
];


const Services = () => {
  return (
    <>
     <div className="container py-20">
        {/* hidding title */}
           <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
            <h1 className="text-3xl font-bold font-serif">
                What we provide
            </h1>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, reprehenderit!</p>
           </div>

             {/* card section */}
             
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
               {
                    ServiceCard.map((card) => {
                        return(

                            <div key={card.id} className="space-y-4 border-[1px] border-black/30 p-6 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-1000">

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