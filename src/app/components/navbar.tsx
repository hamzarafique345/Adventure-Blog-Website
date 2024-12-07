import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='text-white flex flex-col'>
        {/*Logo Search Social Section */}

      <div className='flex justify-evenly mt-2 mb-2 mx-4 es:mx-0 '>
        {/*Logo */}
        <div>
          <h1 className='text-center mt-1 text-[9px] font-semibold text-white -500 leading-3 es:text-[10px] sm:text-[15px] scale-105'><strong className='text-yellow-400 font-black'>Ha</strong>mza  Trav<strong className='text-yellow-400'>el</strong> <br /> <strong className='text-sky-200 '>Guide</strong></h1>
        </div>
         <div>
        <input type="text" className='rounded-full text-black border-2 h-6 sm:h-7 border-slate-500 es:h-6   placeholder:text-[10px] placeholder:pl-3 w-28  es:w-48 sm:w-56 lg:w-80 lg:h-8' placeholder='Search Your option'/>
       </div>
        {/*Social */}
        <div className='flex mt-1 gap-2 es:gap-1 sm:gap-4'>
        <FaFacebook  className='text-blue-600   hover:text-blue-700   w-4 h-4 es:w-5 es:h-5  sm:h-6 sm:w-6  hover:scale-110 '/>
        <FaTwitter  className='text-sky-600 hover:text-sky-700       w-4 h-4  es:w-5 es:h-5 sm:h-6 sm:w-6  hover:scale-110'/>
        <FaInstagram  className='text-pink-500 hover-pink-600        w-4 h-4  es:w-5 es:h-5 sm:h-6 sm:w-6  hover:scale-110     '/>
        <FaYoutube  className='text-red-500 hover:text-red-600       w-4 h-4  es:w-5 es:h-5 sm:h-6 sm:w-6  hover:scale-110'/>
        </div>
      </div>
<div className='h-[1px] bg-slate-300 '></div>
      {/*Pages Nav Button */}

      <div className='flex justify-center mt-2'>
        <ul className='flex space-x-1 text-[11px] font-medium es:font-medium es:text-[15px] sm:text-[18px] sm:font-medium md:space-x-6'>
            <Link href={"#"} className='pointer hover:scale-110 transition-transform duration-500'>Home         </Link>
            <Link href={"#"} className='pointer hover:scale-110  transition-transform duration-500'>About me    </Link>
            <Link href="#carouselpage" className='pointer hover:scale-110  transition-transform duration-500'>Category    </Link>
            <Link href={"#blog"} className='pointer hover:scale-110  transition-transform duration-500'>Blog        </Link>
            <Link href={"#"} className='pointer hover:scale-110 transition-transform duration-500'>Contact Me   </Link>
        </ul>
      </div>
    </div>
  )
}
