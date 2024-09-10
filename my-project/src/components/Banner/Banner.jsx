import React from 'react'
import Banner1 from "../../assets/banner.png";

const Banner = () => {
  return (
    <div>
        <div className="container py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* img section */}
                <div className="flex flex-col justify-center items-center">
                    <img src={Banner1} alt="" className="w-[95%] md:w-full mx-auto"/>
                </div>

                {/* text section */}

                <div className="space-y-4 flex justify-center flex-col ">
                    <h1 className="text-4xl font-bold font-serif">We Belive that a team makes any project better</h1>

                    <p className="text-gray-500 text-sm leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas labore tenetur perferendis, voluptatem deserunt?
                    </p>

                     {/* button section */}
                    <div>
                    <button className="primary-btn">Discover Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;