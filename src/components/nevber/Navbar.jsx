import React from 'react'
import Logo from "../../assets/Logo.png";
import {motion} from "framer-motion";


const NavLinks = [
  {
    id : 1,
    title : "About",
    Link : "#",
  },
  {
    id : 2,
    title : "Services",
    Link : "#",
  },
  {
    id : 3,
    title : "Projects",
    Link : "#",
  },
  {
    id : 4,
    title : "Contact",
    Link : "#",
  },
]

const Navbar = () => {
  return (
    <>
    <motion.div
     initial={{y:-100}}
     animate ={{y:0}} 
     transition={{duration:0.5}}
    className="container py-4 flex justify-between items-center">

     {/* logo section */}
     <div className="flex items-center gap-4">
     <img src={Logo} alt="logo" className="w-9" />
     <span className="text-2xl font-bold">Interior</span>
     </div>

     {/* link section */}
     <div className="hidden md:block">
      {NavLinks.map((link) => {
        return (
          <a href={link.link} className="mx-4 text-sm font-semibold">
            {link.title}
          </a>
        );
      })}
     </div>

     {/* button  section */}
     <div>
      <button className="primary-btn"> try for free  
      </button>
      </div>
    </motion.div>
    </>
  )
}

export default Navbar;