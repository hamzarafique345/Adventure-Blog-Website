


import Image from 'next/image'
import React from 'react'




const Bestplaces = () => {
  return (
    <div> 
       <h1 className='    text-center mt-16 mb-10 font-bold text-[17px] es:text-[23px] sm:text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] '>     Worlds best places to visit      </h1>
       <Image
       src={'/bestplaces.png'}
       alt='Best Places'
       className='w-full h-[250px] object-cover  es:h-[300px] lg:h-[400px] xl:h-[500px]'
       width={1000}
       height={1000}/>
    </div>
  )
}




export default Bestplaces





