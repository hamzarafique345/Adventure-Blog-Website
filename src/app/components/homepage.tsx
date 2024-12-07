
import React from 'react'
import Navbar from './navbar'

export default function Homepage() {
  return (
    <div className="relative bg-center bg-cover h-[60vh] es:h-[65vh] sm:h-[75vh]  md:h-[90vh] " style={{backgroundImage:"url(/home.png)"}}>
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>
      <div className='relative z-10 flex justify-center flex-col'>
    < Navbar/>  
      
      {/*Home Content  */}
      <div>
      <div className='text-white flex space-y-6 flex-col justify-center items-center mt-[80px] es:mt-[100px] sm:mt-[120px] md:mt-[140px]'>
        {/*Heading Main*/}
        <h3 className='text-[20px] font-black es:text-[25px] sm:text-[30px] lg:text-[40px]'>Where will you go next?</h3>
        {/*Paragraph */}
        <p className='text-[11px] text-center mx-2 es:mx-6 es:text-[13px] sm:text-[18px] sm:mx-10 lg:text-[23px] lg:mx-20 md:mx-28 xl:text-[28px] xl:mx-44'>    Discover hidden gems, iconic landmarks, and unforgettable experiences with our travel guide. Whether you are seeking adventure, relaxation, or cultural immersion, our blog is here to inspire your next journey.
        </p>
        {/*Button */}
        <span className='text-yellow-400 font-semibold es:text-[20px] sm:text-[25px] md:text-[33px] sm:text-[25px] pt-4'>Lets Go.....</span>
      </div></div>
      </div>
    </div>
  )
}
