
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
interface FeatureType{
  text:string,
  imageUrl:string,
  paragraph:string
}
const Feature = ({ data = [] }: { data: Array<{ text: string; imageUrl: string; paragraph: string }> }) => {
  const [currentPage, setCurrentPage] = useState(1); // Manage current page
  const itemsPerPage = 6; // Number of items per page

  // Calculate the index range for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mt-28 justify-center flex flex-col m-auto items-center">
      <h1 className="text-center  font-semibold text-[25px] hover:scale-105 transition duration-300 hover:underline mb-10">Featured Explore</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedData.map((val: FeatureType, i: number) => (
          <div key={i} className="py-1 w-[200px] es:w-[230px] md:w-[235px] xl:w-[300px] lg:w-[260px] hover:overflow-hidden  shadow-md shadow-slate-800 overflow-hidden">
            <Image
              className="w-full h-[205px] aspect-video object-cover hover:105 md:h-[230px] xl:h-[290px] hover:scale-105 transition duration-500 "
              src={val.imageUrl}
              alt={val.text}
              width={2000}
              height={2000}
            />
            <div className='px-4 mt-2 flex h-[160px]  flex-col justify-between'>

              <div>
            <h1 className='font-black font-serif mb-2  mt-2 hover:scale-105 transition duration-500'>{val.text}</h1></div>
            <p className='text-gray-600 text-[13px] mb-2 '>{val.paragraph}</p>
            <h5 className='text-[13px] font-semibold hover:scale-105 transition duration-500'><span className='font-black text-yellow-500 underline text-[13px] mt-auto'>Solo Travel</span> by Hamza</h5>
          </div></div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex gap-2 mt-6">
        {/* Conditionally Render Previous Button */}
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 text-[16px] text-black rounded"
          >
            {"<"}
          </button>
        )}
        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 text-[16px] font-semibold${
              currentPage === i + 1
                ? ' text-black'
                : ' text-black'
            } rounded`}
          >
            {i + 1}
          </button>
        ))}
        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 text-[16px] ${
            currentPage === totalPages
              ? ' text-gray-500 cursor-not-allowed'
              : ' text-black'
          } rounded`}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Feature;
