"use client";
import Image from "next/image";
import { useState } from "react";

export const Myblog = ({ data }: { data: { blogtitle: string; paragraph: string; imageUrl: string }[] }) => {
  const [pageNo, setPageNo] = useState(1);
  const itemsPerPage = 4;
  const totalPage = Math.ceil(data.length / itemsPerPage);
  const startIndex = (pageNo - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const getPaginationRange = (currentPage: number, totalPages: number, maxVisiblePages = 5) => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (currentPage <= half) {
      end = Math.min(totalPages, maxVisiblePages);
    } else if (currentPage + half >= totalPages) {
      start = Math.max(1, totalPages - maxVisiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const paginationNumbers = getPaginationRange(pageNo, totalPage);

  return (
<div id="blog" className="mt-16">
  <h1 className="text-[23px] md:text-[26px] mt-11 hover:scale-110 transition duration-300 hover:underline mb-12 font-semibold text-center sm:hover:scale-105 sm:transition sm:duration-500">
    My Latest Blog
  </h1>
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 px-4 mx-0 es:mx-16 md:mx-24 lg:mx-32 xl:mx-80">
      {currentData.map((val, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row border rounded-lg shadow-lg overflow-hidden "
        >
          {/* Image Section */}
          <Image
            src={val.imageUrl || "/default-image.jpg"} // Default image for fallback
            alt={val.blogtitle || "Blog Image"}
            className="w-full sm:w-[40%] sm:h-auto aspect-video object-cover hover:scale-105 transition duration-300 rounded-xl"
            width={1000}
            height={1000}
            loading="lazy"
          />
          
          {/* Content Section */}
          <div className="p-4 flex flex-col justify-between space-y-2 ">
            <h2 className="text-[16px] font-bold hover:scale-105 transition duration-500">{val.blogtitle}</h2>
            <h4 className="text-[13px] hover:scale-105 transition duration-500">
              <span className="text-yellow-500 underline ">Post</span> by Hamza
            </h4>
            <h3 className="text-[12px] hover:scale-105 transition duration-500">
              4 Dec, 2024 <span className="text-yellow-500">50 comments</span>
            </h3>
            <p className="text-sm text-gray-600">{val.paragraph}</p>
            <button className="text-yellow-400 font-semibold hover:scale-105 transition duration-500 text-[13px] hover:underline">
              READ MORE .....
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>



      {/* Pagination */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        {pageNo > 1 && (
          <button
            className="px-4 py-2 text-black rounded border"
            onClick={() => setPageNo(pageNo - 1)}
            aria-label="Previous Page"
          >
            {"<"}
          </button>
        )}
        {paginationNumbers.map((page) => (
          <button
            key={page}
            className={`px-3 py-2 rounded font-semibold ${
              page === pageNo ? "bg-blue-500 text-white" : "text-black"
            } hover:font-extrabold`}
            onClick={() => setPageNo(page)}
            aria-label={`Page ${page}`}
          >
            {page}
          </button>
        ))}
        {pageNo < totalPage && (
          <button
            className="px-4 py-2 text-black rounded border"
            onClick={() => setPageNo(pageNo + 1)}
            aria-label="Next Page"
          >
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};
