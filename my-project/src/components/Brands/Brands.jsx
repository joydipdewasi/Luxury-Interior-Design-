import React from 'react';
import Brand1 from "../../assets/brand/1.png";
import Brand2 from "../../assets/brand/2.png";
import Brand3 from "../../assets/brand/3.png";
import Brand4 from "../../assets/brand/4.png";
import Brand5 from "../../assets/brand/5.png";


const Brands = () => {
  return (
    <>
    <div className="container py-20">
        <div className="flex flex-wrap justify-center lg:justify-between gap-6">
            <img src={Brand1} alt="Brand" className="w-[110px]" />
            <img src={Brand2} alt="Brand" className="w-[110px]"  />
            <img src={Brand3} alt="Brand" className="w-[110px]"  />
            <img src={Brand4} alt="Brand" className="w-[110px]"  />      
            <img src={Brand5} alt="Brand" className="w-[110px]"  />
        </div>
    </div>
    </>
  )
}

export default Brands