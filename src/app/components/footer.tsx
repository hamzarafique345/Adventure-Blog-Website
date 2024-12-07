import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex  flex-wrap  justify-evenly bg-yellow-400 justify-center py-6 text-white '>
        {/*Last portion */}
      <div>
<h1 >@2024 All Right Reserved</h1>
      </div>
      {/*Nav button */}
      <div className='flex justify-center '>
        <ul className='flex space-x-1 font-semibold border-spacing-y-2  text-[11px] font-medium es:font-medium es:text-[15px] sm:text-[18px] sm:font-medium md:space-x-6'>
            <li className='pointer hover:scale-110 transition-transform duration-500'>Home</li>
            <li className='pointer hover:scale-110  transition-transform duration-500'>About me</li>
            <li className='pointer hover:scale-110  transition-transform duration-500'>Category</li>
            <li className='pointer hover:scale-110  transition-transform duration-500'>Blog</li>
        </ul>
      </div>
      {/*Social Button */}
      <div className='flex  gap-2 es:gap-1 sm:gap-4 hidden sm:flex'>
        <FaFacebook  className='text-blue-600   hover:text-blue-700   w-4 h-4 es:w-5 es:h-5  sm:h-6 sm:w-6  hover:scale-110 '/>
        <FaTwitter  className='text-sky-600 hover:text-sky-700       w-4 h-4  es:w-5 es:h-5 sm:h-6 sm:w-6  hover:scale-110'/>
        <FaInstagram  className='text-pink-500 hover-pink-600        w-4 h-4  es:w-5 es:h-5 sm:h-6 sm:w-6  hover:scale-110     '/>
        <FaYoutube  className='text-red-500 hover:text-red-600       w-4 h-4  es:w-5 es:h-5 sm:h-6 sm:w-6  hover:scale-110'/>
        </div>
    </div>
  )
}

export default Footer
