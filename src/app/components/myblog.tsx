"use client";
import React, { useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface BlogPost {
  blogtitle: string;
  paragraph: string;
  imageUrl: string;
  slug: {
    current: string;
  };
}

interface HomePageProps {
  data: BlogPost[];
}

export async function getStaticProps() {
  const data = await client.fetch(
    `*[_type == "bloglatest"]{
      blogtitle,
      paragraph,
      "imageUrl": image.asset->url,
      slug
    }`
  );

  return {
    props: {
      data,
    },
  };
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  const [pageNo, setPageNo] = useState(1);
  const itemsPerPage = 6;
  const totalPage = Math.ceil(data.length / itemsPerPage);
  const startIndex = (pageNo - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const getPaginationRange = (
    currentPage: number,
    totalPages: number,
    maxVisiblePages = 5
  ) => {
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
    <div className="px-4 mx-auto max-w-screen-lg">
      <h1 className="text-center text-3xl mt-12 mb-6">My Latest Blog</h1>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentData.map((val, i) => (
          <div
            key={i}
            className="relative border rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <Image
              src={val.imageUrl || "/default-image.jpg"}
              alt={val.blogtitle}
              className="w-full h-64 object-cover"
              width={1000}
              height={1000}
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-xl">{val.blogtitle}</h2>
                <p className="text-sm text-gray-600 mb-8">{val.paragraph}</p>
              </div>
              <Link
                className="absolute bottom-4  text-yellow-500 hover:underline"
                href={`/blog/${val.slug.current}`}
              >
                Click me for More Information
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {/* Previous Button */}
        {pageNo > 1 && (
          <button
            className="px-4 py-2 text-black border rounded mr-2"
            onClick={() => setPageNo(pageNo - 1)}
          >
            &lt;
          </button>
        )}

        {/* Pagination Numbers */}
        {paginationNumbers.map((page) => (
          <button
            key={page}
            className={`px-3 py-2 rounded mx-1 ${
              page === pageNo ? "bg-blue-500 text-white" : "text-black"
            }`}
            onClick={() => setPageNo(page)}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        {pageNo < totalPage && (
          <button
            className="px-4 py-2 text-black border rounded ml-2"
            onClick={() => setPageNo(pageNo + 1)}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
